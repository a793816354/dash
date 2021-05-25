const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (end >= start) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    }

    if (target < arr[mid]) {
      end = mid - 1;
    }
  }

  return -1;
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;

  while (left < numbers.length) {
    const value = target - numbers[left];
    const valueIndex = binarySearch(numbers, value);
    if (valueIndex !== -1) {
      return [left + 1, left === valueIndex ? valueIndex + 2 : valueIndex + 1];
    }
    left++;
  }
};
// twoSum([2, 3, 4], 6);
// twoSum([2, 7, 11, 15], 9);
console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));
