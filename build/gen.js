const polyfillLibrary = require('polyfill-library');
const mergeStream = require("merge2");
const streamToString = require("stream-to-string");
const streamFromString = require("from2-string");
const sources = require("polyfill-library/lib/sources");
const denodeify = require('denodeify');
const rimraf = denodeify(require('rimraf'));
const path = require('path');
const fs = require('fs');
const writeFile = denodeify(fs.writeFile);
const mkdir = denodeify(fs.mkdir);

const modulesDir = path.join(path.dirname(__dirname), 'modules');
const helpersDir = path.join(path.dirname(__dirname), 'helpers');

genAll();


async function genAll() {
  await rimraf(modulesDir);
  await mkdir(modulesDir);
  await rimraf(helpersDir);
  await mkdir(helpersDir);

  const features = await polyfillLibrary.listAllPolyfills();
  for (const feature of features) {

    if (providedByBabel(feature)) {
      continue;
    }

    let filename = path.join(modulesDir, feature + '.js');
    if (feature.startsWith('_')) {
      filename = path.join(helpersDir, feature + '.js')
    }

    await writeFile(
      filename,
      await gen(feature), {
        encoding: 'utf-8'
      },
    );
  }
}

async function gen(feature) {
  const meta = await polyfillLibrary.describePolyfill(feature);
  const output = mergeStream();
  const helperName = normalizeHelperName(feature);


  for (const dep of (meta.dependencies || [])) {
    const name = normalizeHelperName(dep);
    if (name) {
      output.add(streamFromString(
        `import ${name} from "../helpers/${dep}";\n`
      ));
    }
  }

  if (!helperName) {
    output.add(streamFromString("(function(undefined) {\n"));

    if (meta.detectSource) {
      output.add(streamFromString(`if (!(${meta.detectSource})) {`));
    }
  }

  output.add(sources.streamPolyfillSource(feature, 'raw'));

  if (!helperName) {
    if (meta.detectSource) {
      output.add(streamFromString(`}`));
    }

    output.add(
      streamFromString(
        "}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n"
      )
    );
  }

  if (helperName) {
    output.add(streamFromString(
      `export default ${helperName};\n`
    ));
  }

  return await streamToString(output);
}

function providedByBabel(f) {
  const p = /^(_TypedArray|Function|Date|Math|Object|String|Number|(Weak)?(Map|Set)|Symbol|Array|RegExp|Promise|Reflect)($|\.)/;
  return p.test(f);
}

function normalizeHelperName(name) {
  if (name === '_mutation' || name === '_DOMTokenList') {
    return name;
  }
  if (name.startsWith('_ESAbstract.')) {
    return name.substr(12);
  }
  if (name.startsWith('_')) {
    return name.substr(1);
  }
  return false;
}
