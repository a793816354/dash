/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = left + 1;
  let result = 0;

  while (right < prices.length) {
    const leftVal = prices[left];
    const rightVal = prices[right];

    if (rightVal > leftVal) {
      result += rightVal - leftVal;
    }
    left = right;
    right = left + 1;
  }
  return result;
};

console.log(maxProfit([1, 11, 7, 4, 2]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
