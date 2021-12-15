/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  if (!cardPoints.length) return 0;

  let lastVal = cardPoints[cardPoints.length - k];
  let max = 0;
  let sum = 0;
  for (let index = cardPoints.length - k; index < cardPoints.length; index++) {
    sum += cardPoints[index];
  }
  max = sum;
  for (let index = cardPoints.length; index < cardPoints.length + k; index++) {
    sum = sum - lastVal + cardPoints[index % cardPoints.length];
    if (sum > max) {
      max = sum;
    }
    lastVal = cardPoints[index - k + 1];
  }
  return max;
};
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log(maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8));
