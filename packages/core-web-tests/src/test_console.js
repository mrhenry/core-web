QUnit.module("console", () => {
  QUnit.test("log", assert => {
    console.log("message");
    assert.ok(true, "it worked");
  });
  QUnit.test("assert", assert => {
    console.assert(true, "message");
    assert.ok(true, "it worked");
  });
  QUnit.test("count", assert => {
    console.count("message");
    assert.ok(true, "it worked");
  });
  QUnit.test("debug", assert => {
    console.debug("message");
    assert.ok(true, "it worked");
  });
  QUnit.test("dir", assert => {
    console.dir({ foo: "bar" });
    assert.ok(true, "it worked");
  });
});
