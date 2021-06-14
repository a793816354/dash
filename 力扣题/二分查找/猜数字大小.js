/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const statusCode = guess(mid);
    switch (statusCode) {
      case -1:
        right = mid - 1;
        break;
      case 1:
        left = mid + 1;
        break;
      case 0:
        return mid;
    }
  }
};
