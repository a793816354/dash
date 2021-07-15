// 设置起始，结束坐标

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 1.先使用效率低的遍历
// var twoSum = function (numbers, target) {
//   for (let index = 0; index < numbers.length; index++) {
//     const ele = numbers[index];
//     let left = index+1;
//     let right = numbers.length - 1;
//     while (left <= right) {
//       const mid = left + Math.floor((right - left) / 2);
//       const gap = target-ele
//       if (numbers[mid]  === gap) {
//         return [index + 1, mid + 1];
//       } else if (numbers[mid] < gap) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
// };
// console.log(twoSum([2,3,4],  6));
// console.log(twoSum([-1, 0], -1));
// console.log(twoSum([12,13,23,28,43,44,59,60,61,68,70,86,88,92,124,125,136,168,173,173,180,199,212,221,227,230,277,282,306,314,316,321,325,328,336,337,363,365,368,370,370,371,375,384,387,394,400,404,414,422,422,427,430,435,457,493,506,527,531,538,541,546,568,583,585,587,650,652,677,691,730,737,740,751,755,764,778,783,785,789,794,803,809,815,847,858,863,863,874,887,896,916,920,926,927,930,933,957,981,997],542));

// 2.由于升序，所以两元素必定在目标元素之前，使用两次二分法
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 外层左边界根据双倍cur是否小于target
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  //找到中间，必然一数在左或中，一数在右
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    const doubleVal = 2 * numbers[mid];
    if (doubleVal === target) {
      end = mid;
    } else if (doubleVal < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  for (let index = 0; index <= end; index++) {
    const ele = numbers[index];
    let left = end
    let right = numbers.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const gap = target - ele;
      if (mid !== index && numbers[mid] === gap) {
        return [index + 1, mid + 1];
      } else if (mid === index || numbers[mid] < gap) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
};

console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8));
console.log(
  twoSum(
    [
      12, 13, 23, 28, 43, 44, 59, 60, 61, 68, 70, 86, 88, 92, 124, 125, 136,
      168, 173, 173, 180, 199, 212, 221, 227, 230, 277, 282, 306, 314, 316, 321,
      325, 328, 336, 337, 363, 365, 368, 370, 370, 371, 375, 384, 387, 394, 400,
      404, 414, 422, 422, 427, 430, 435, 457, 493, 506, 527, 531, 538, 541, 546,
      568, 583, 585, 587, 650, 652, 677, 691, 730, 737, 740, 751, 755, 764, 778,
      783, 785, 789, 794, 803, 809, 815, 847, 858, 863, 863, 874, 887, 896, 916,
      920, 926, 927, 930, 933, 957, 981, 997,
    ],
    542
  )
);
console.log(twoSum([0, 0, 3, 4], 0));

console.log(twoSum([1, 2, 3, 4], 5));
console.log(twoSum([1, 3, 4, 4], 8));
