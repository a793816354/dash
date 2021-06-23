/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  if (
    letters[0].codePointAt(0) > target.codePointAt(0) ||
    letters[letters.length - 1].codePointAt(0) < target.codePointAt(0)
  )
    return letters[0];

  let left = 0;
  let right = letters.length - 1;
  let tarEleNum = target.codePointAt(0);

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midEle = letters[mid];
    const midEleNum = midEle.codePointAt(0);

    if (midEle === target) {
      left = mid + 1;
    } else if (midEleNum < tarEleNum) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (left >= letters.length) {
    return letters[0];
  }

  return letters[left];
};
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(
  nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e")
);
