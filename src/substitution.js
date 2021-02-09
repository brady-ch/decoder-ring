const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabetAsString = "abcdefghijklmnopqrstuvwxyz";
  // main substitution function, which calls the helper functions
  function substitution(input, alphabet, encode = true) {
    if (
      // if statment to throw edge cases
      !alphabet ||
      [...new Set(alphabet)].length !== alphabet.length ||
      alphabet.length !== 26
    )
      return false;
    const [keyArray, valueArray] = encodeOrDecode(encode, alphabet);
    return substitute(input, keyArray, valueArray);
  }
  // helper function that will encode or decode based on the order the key and value arrays are passed in
  function substitute(input, keyArray, valueArray) {
    input = input.toLowerCase().split("");
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") i++;
      let index = keyArray.indexOf(input[i]);
      input[i] = valueArray[index];
    }
    return input.join("");
  }
  // sets the key and value arrays so that they will be passed to the substitute function based on the value of encode
  function encodeOrDecode(encode, alphabet) {
    let keyArray = [];
    let valueArray = [];
    if (encode) {
      keyArray = standardAlphabetAsString.split("");
      valueArray = alphabet.split("");
    } else {
      keyArray = alphabet.split("");
      valueArray = standardAlphabetAsString.split("");
    }
    return [keyArray, valueArray];
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
