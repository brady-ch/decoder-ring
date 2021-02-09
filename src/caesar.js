const caesarModule = (function () {
  // lowercase values start at a = 97, z = 122

  function caesar(input, shift, encode = true) {
    if (!encode) shift = -shift; // determines if you are encoding or decoding
    shiftedInput = input.split(""); // Splits the string into an array so you can replace the values at the given index
    if (invalidShift(shift)) return false;
    caseInsensitiveInput = input.toLowerCase(); // Will make the string case insensitive
    for (let i = 0; i < shiftedInput.length; i++) {
      charValueBeforeShift = caseInsensitiveInput.charCodeAt(i);
      if (charValueBeforeShift >= 97 && charValueBeforeShift <= 122) {
        // ignore if it is a space or special character
        charValueAfterShift = toShift(charValueBeforeShift + shift);
        shiftedInput[i] = String.fromCharCode(charValueAfterShift);
      }
    }
    return shiftedInput.join("");
  }

  // This will handle edge cases where the shift value will be an unexpected value
  function invalidShift(shift = 0) {
    if (shift > 25 || shift < -25 || shift === 0) return true;
  }

  // This will handle the shift and the edge cases of wrapping
  function toShift(shift) {
    if (shift < 97) charValueAfterShift = shift + 26;
    if (shift > 122) charValueAfterShift = shift - 26;
    if (shift > 96 && shift < 123) charValueAfterShift = shift;

    return charValueAfterShift;
  }

  return {
    caesar,
    invalidShift,
    toShift,
  };
})();

// module.exports = {
//   caesar: caesarModule.caesar,
//   invalidShift: caesarModule.invalidShift,
//   toShift: caesarModule.toShift,
// };
module.exports = caesarModule.caesar;
