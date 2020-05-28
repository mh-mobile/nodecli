const assert = require("assert");
const fs = require("fs");
const path = require("path");
const md2html = require("../md2html");

it("convert to markdown (GFM = false", () => {
  const sample = fs.readFileSync(
    path.resolve(__dirname, "./fixtures/sample.md"),
    { encoding: "utf8" }
  );

  const expected = fs.readFileSync(
    path.resolve(__dirname, "./fixtures/expected.md"),
    { encoding: "utf8" }
  );

  assert.strictEqual(md2html(sample, { gfm: false }), expected);
});

it("convert to markdown (GFM = true", () => {
  const sample = fs.readFileSync(
    path.resolve(__dirname, "./fixtures/sample.md"),
    { encoding: "utf8" }
  );

  const expected = fs.readFileSync(
    path.resolve(__dirname, "./fixtures/expected-gfm.md"),
    { encoding: "utf8" }
  );

  assert.strictEqual(md2html(sample, { gfm: true }), expected);
});
