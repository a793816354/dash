/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//哈希映射记录次数
var intersect = function (nums1, nums2) {
  const obj = {};
  const result = [];

  for (let index = 0; index < nums1.length; index++) {
    const ele = nums1[index];
    obj[ele] ? obj[ele]++ : (obj[ele] = 1);
  }

  for (let index = 0; index < nums2.length; index++) {
    const ele = nums2[index];
    //存在且>0
    if (obj[ele]) {
      result.push(ele);
      obj[ele]--;
    }
  }

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//排序，双指针
var intersect2 = function (nums1, nums2) {
  const result = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let one = 0;
  let two = 0;

  while (one < nums1.length && two < nums2.length) {
    const oneVal = nums1[one];
    const twoVal = nums2[two];

    if (oneVal < twoVal) {
      one++;
    } else if (oneVal > twoVal) {
      two++;
    } else {
      result.push(oneVal);

      one++;
      two++;
    }
  }
  return result;
};
console.log(intersect2([1, 2, 2, 1], [2, 2]));
