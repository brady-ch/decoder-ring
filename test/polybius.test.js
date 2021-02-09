// const {
//   cipherMap,
//   findIndex,
//   encoding,
//   decode,
// } = require("../src/polybius.js");
const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

const cipherMap = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "ij", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
];
describe("polybius", () => {
  describe("polybius accessing my array correctly", () => {
    it("The array that maps my values is being accessed correctly", () => {
      expect(cipherMap[0][1]).to.equal("b");
    });
  });

  //describe("findIndex", () => {
  // it("Will return a string", () => {
  //   expect(findIndex("f")).to.be.a("string");
  // });
  // it("It is returning the correct strings that are tranlated from a polybius square", () => {
  //   expect(findIndex("f")).to.equal("12");
  //   expect(findIndex("l")).to.equal("13");
  //   expect(findIndex("b")).to.equal("21");
  // });
  // it("Will handle the ij edge case", () => {
  //   expect(findIndex("i")).to.equal("42");
  // });
  //});

  describe("polybius main", () => {
    it("Correctly encodes", () => {
      expect(polybius("thinkful")).to.equal("4432423352125413");
    });
    it("handles spaces", () => {
      expect(polybius("Im a programmer now")).to.equal(
        "4223 11 53244322241123235124 334325"
      );
    });
    it("decodes", () => {
      expect(polybius("4223 11 53244322241123235124 334325", false)).to.equal(
        "ijm a programmer now"
      );
    });
    it("returns both i and j when 42 is passed in", () => {
      expect(polybius("42", false)).to.equal("ij");
    });
    it("handles upper and lower case", () => {
      expect(polybius("Im a programmer now")).to.equal(
        "4223 11 53244322241123235124 334325"
      );
    });
    it("Returns false if the numbers to decode are odd", () => {
      expect(polybius("321", false)).to.equal(false);
    });
  });

  //describe("encode", () => {
  // it("Correctly encodes", () => {
  //   expect(encoding("thinkful")).to.equal("4432423352125413");
  // });
  // it("handles spaces", () => {
  //   expect(encoding("im a programmer now")).to.equal(
  //     "4223 11 53244322241123235124 334325"
  //   );
  // });
  // //});

  // //describe("decode", () => {
  // it("decodes", () => {
  //   expect(decode("4223 11 53244322241123235124 334325")).to.equal(
  //     "ijm a programmer now"
  //   );
  // });
  // it("returns both i and j when 42 is passed in", () => {
  //   expect(decode("42")).to.equal("ij");
  // });
  //});
});
