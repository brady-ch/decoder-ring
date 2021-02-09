// Write your tests here!

const substitution = require("../src/substitution.js");
const expect = require("chai").expect;

const alphaNotUnique = "abcdefghijklmnopqrstuvwxyzz";
const alpha = "abcdefghijklmnopqrstuvwxyz";
const alphaScramble = "xoyqmcgrukswaflnthdjpzibev";

describe("substitution", () => {
  describe("error handling", () => {
    it("Should return false if the substitution alphabet is missing", () => {
      expect(substitution("some input")).to.equal(false);
    });
    it("should return false if the substitution alphabet isnt 26 characters", () => {
      expect(
        substitution("some input", "abcdefghijklmnopqrstuvwxyza")
      ).to.equal(false);
      expect(substitution("some input", "abcdefghijklmnopqrstuvwxy")).to.equal(
        false
      );
    });
    it("should return false if any characters are not unique", () => {
      expect(substitution("some input", alphaNotUnique)).to.equal(false);
    });
  });

  describe("encoding", () => {
    it("should encode a message", () => {
      expect(substitution("thinkful", alphaScramble)).to.equal("jrufscpw");
    });
    it("should work with special characters", () => {
      expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal(
        "y&ii$r&"
      );
    });
    it("should preserve spaces", () => {
      expect(substitution("doing some spaces", alphaScramble)).to.equal(
        "qlufg dlam dnxymd"
      );
    });
  });

  describe("decoding", () => {
    it("should encode a message", () => {
      expect(substitution("jrufscpw", alphaScramble, false)).to.equal(
        "thinkful"
      );
    });
    it("should work with special characters", () => {
      expect(
        substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
      ).to.equal("message");
    });
    it("should preserve spaces", () => {
      expect(substitution("qlufg dlam dnxymd", alphaScramble, false)).to.equal(
        "doing some spaces"
      );
    });
  });
});
