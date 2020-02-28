QUnit.test("setImmediate", function(assert) {
  var done = assert.async();
  setImmediate(() => {
    assert.ok(true, "expected setImmediate to call");
    done();
  });
});
