const polybiusModule = (function () {
  // this will be used as a map to encode and decode strings passed in
  const cipherMap = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "ij", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];
  // main polybius function, it will encode or decode data based on the cipher map above
  function polybius(input, encode = true) {
    let check = input.split(" ").join("");
    if (check.length % 2 !== 0 && !encode) return false;
    input = input.toLowerCase(); // Makes the input case insensitive
    if (encode) return encoding(input); // checks if encoding or decoding and calls the correct helper function
    return decode(input);
  }
  // this helper function is called to encode a string of letters
  function encoding(input) {
    encodedArray = input.split("");
    for (let i = 0; i < encodedArray.length; i++) {
      if (encodedArray[i] !== " ") {
        encodedArray[i] = findIndex(encodedArray[i]);
      }
    }
    return encodedArray.join("");
  }
  // this helper function is called to decode a string of numbers
  function decode(input) {
    decodedArray = []; // here I use an array so as not to make a new string every itteration of the loop
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        decodedArray.push(" ");
        i++;
      }
      yCoord = parseInt(input[i]) - 1;
      xCoord = parseInt(input[i + 1]) - 1;
      decodedArray.push(cipherMap[input[i + 1] - 1][input[i] - 1]);
    }
    return decodedArray.join("");
  }
  // finds the index of the input letter and returns the encoded numbers as a string
  function findIndex(letter) {
    //rows are the first digit to be returned
    if (letter === "i" || letter === "j") return "42"; //handles the edge case
    let columnNumber = 0;
    let rowNumber = 0;
    // This will itterate through the array and update the values
    for (let i = 0; i < 5; i++) {
      // x coordinate
      for (let j = 0; j < 5; j++) {
        // y coordinate
        if (cipherMap[j][i] === letter) {
          columnNumber = i + 1;
          rowNumber = j + 1;
          break;
        }
      }
      if (columnNumber) break;
    }
    return columnNumber.toString() + rowNumber.toString();
  }

  return {
    polybius,
    cipherMap,
    findIndex,
    encoding,
    decode,
  };
})();

// module.exports = {
//   polybius: polybiusModule.polybius,
//   cipherMap: polybiusModule.cipherMap,
//   findIndex: polybiusModule.findIndex,
//   encoding: polybiusModule.encoding,
//   decode: polybiusModule.decode,
// };
module.exports = polybiusModule.polybius;
