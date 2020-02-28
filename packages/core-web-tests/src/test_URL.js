QUnit.module("URL", function() {
  QUnit.test("new URL", assert => {
    const url = new URL(
      "https://u:p@example.com:8080/some/path?foo=true&bar=true#frag"
    );
    assert.equal(
      url.href,
      "https://u:p@example.com:8080/some/path?foo=true&bar=true#frag"
    );
    assert.equal(url.origin, "https://example.com:8080");
    assert.equal(url.protocol, "https:");
    assert.equal(url.username, "u");
    assert.equal(url.password, "p");
    assert.equal(url.host, "example.com:8080");
    assert.equal(url.hostname, "example.com");
    assert.equal(url.port, "8080");
    assert.equal(url.pathname, "/some/path");
    assert.equal(url.search, "?foo=true&bar=true");
    assert.equal(url.hash, "#frag");
    assert.deepEqual(
      [...url.searchParams.entries()],
      [
        ["foo", "true"],
        ["bar", "true"]
      ]
    );
  });

  QUnit.test("new URL with base", assert => {
    assert.equal(
      new URL(
        "rel?baz=true#fragx",
        "https://u:p@example.com:8080/some/path?foo=true&bar=true#frag"
      ).href,
      "https://u:p@example.com:8080/some/rel?baz=true#fragx"
    );
    assert.equal(
      new URL(
        "/abs?baz=true#fragx",
        "https://u:p@example.com:8080/some/path?foo=true&bar=true#frag"
      ).href,
      "https://u:p@example.com:8080/abs?baz=true#fragx"
    );
    assert.equal(
      new URL(
        "rel?baz=true",
        "https://u:p@example.com:8080/some/path?foo=true&bar=true#frag"
      ).href,
      "https://u:p@example.com:8080/some/rel?baz=true"
    );
    assert.equal(
      new URL(
        "rel",
        "https://u:p@example.com:8080/some/path?foo=true&bar=true#frag"
      ).href,
      "https://u:p@example.com:8080/some/rel"
    );
  });
});
