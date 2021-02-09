// Write your tests here!
// const { caesar, invalidShift, toShift } = require("../src/caesar.js");
const caesar = require("../src/caesar");
const expect = require("chai").expect;
describe("caesar", () => {
  // describe("caesar invalidShift", () => {
  //   it("Should return false if the shift is invalid", () => {
  //     expect(invalidShift(26)).to.equal(true);
  //     expect(invalidShift(0)).to.equal(true);
  //     expect(invalidShift(-27)).to.equal(true);
  //   });
  //});

  describe("caesar main", () => {
    it("should return a string", () => {
      expect(caesar("thinkful", 3)).to.be.a("string");
    });
    it("Should return a shifted string", () => {
      expect(caesar("thinkful", 3)).to.equal("wklqnixo");
    });
    it("should handle spaces without shifting them", () => {
      expect(caesar("I am written for a test", 6)).to.equal(
        "o gs cxozzkt lux g zkyz"
      );
    });
    it("should be able to handle negative shift values", () => {
      expect(caesar("thinkful", -1)).to.equal("sghmjetk");
    });
  });

  describe("caesar decode", () => {
    it("should return a string", () => {
      expect(caesar("wklqnixo", 3, false)).to.be.a("string");
    });

    it("should shift in the opposite direction of encoding", () => {
      expect(caesar("wklqnixo", 3, false)).to.equal("thinkful");
    });
  });

  // describe("caesar toShift", () => {
  //   it("should handle edge cases where the index would go out of bounds", () => {
  //     expect(toShift(132)).to.equal(106);
  //   });
  //});
});
