/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const resultSet = new Set();
  for (let index = 0; index < nums2.length; index++) {
    if (set.has(nums2[index])) {
      resultSet.add(nums2[index]);
    }
  }
  return [...resultSet];
};
