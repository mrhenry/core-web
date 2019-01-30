const denodeify = require('denodeify');
const path = require('path');
const fs = require('fs');
const access = denodeify(fs.access);
const m = require('./ast-matcher');

const detectorsDir = path.join(path.dirname(__dirname), 'detectors');

async function detectors(features, action) {
  const matchers = await Promise.all(features.map(async (name) => {

    const filename = path.join(detectorsDir, name+".js");
    if (await exists(filename)) {
      return cachingMatcher(
        name,
        require(filename),
        action,
      );
    }

    if (name.contains('.prototype.')) {
      return cachingMatcher(
        name,
        m(name.replace(/^.+\.prototype\./, '')),
        action,
      );
    }

    return cachingMatcher(
      name,
      m(name),
      action,
    );

  }));

  return (path, state) => {
    for (const m of matchers) {
      m(path, state);
    }
  };
}

function cachingMatcher(name, matchers, action) {
  return (path, state) => {
    if (state[name] === true) {
      return; // nop
    }

    for (const m of matchers) {
      if (m(path.node)) {
        state[name] = true;
        return action(path, name);
      }
    }
  };
}

async function exists(path) {
  try {
    await access(path, fs.constants.R_OK);
    return true;
  } catch(e) {
    return false;
  }
}
