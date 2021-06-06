/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  const startIndex = "a".codePointAt(0);
  const obj = {};

  for (let i = 0; i < strings.length; i++) {
    const str = strings[i];

    let gapNumStr = "0";
    for (let j = 1; j < str.length; j++) {
      const gap =
        (str.codePointAt(j) % startIndex) -
        (str.codePointAt(j - 1) % startIndex);

      gapNumStr += gap < 0 ? 26 + gap : gap;
    }

    if (obj[gapNumStr]) {
      obj[gapNumStr].push(str);
    } else {
      obj[gapNumStr] = [str];
    }
  }

  return Object.values(obj);
};

// console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "zba", "a", "z"]));

// console.log(("a".codePointAt(0) % 97) % 24);
// const startIndex = "z".codePointAt(0);
// console.log((startIndex % 97) % 24);
