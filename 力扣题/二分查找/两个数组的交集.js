const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const minLengthArr = nums1.length < nums2.length ? nums1 : nums2;
  const maxLengthArr = nums1.length < nums2.length ? nums2 : nums1;
  const result = [];

  maxLengthArr.sort((a, b) => a - b);
  const minSetArr = [...new Set(minLengthArr)];
  for (let index = 0; index < minSetArr.length; index++) {
    const ele = minSetArr[index];
    if (binarySearch(maxLengthArr, ele) !== -1) {
      result[result.length] = ele;
    }
  }
  return result;
};

console.log(intersection([4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6, 2, 2, 4]));
