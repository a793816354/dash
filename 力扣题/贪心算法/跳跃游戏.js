/**
 * @param {number[]} nums
 * @return {boolean}
 */
//思路：1.每次跳跃之后都以该点为起始点
// 每次尽量跳大的步骤，也就是从起始点开始，计算当下节点数和距起始点距离之和，选最小
// const judgeRight = (target, nums) => {
//   const finalIndex = nums.length - 1;
//   return target === finalIndex || target + nums[target] >= finalIndex;
// };

// var canJump = function (nums) {
//   if (nums.length < 2) return true;

//   let startIndex = 0;

//   while (startIndex < nums.length) {
//     if (startIndex !== nums.length - 1 && !nums[startIndex]) return false;

//     let max = Number(startIndex + nums[startIndex]);
//     let tempMax = max;
//     for (let index = startIndex + 1; index <= max; index++) {
//       const targetIndex = index + nums[index];
//       if (judgeRight(index, nums)) {
//         return true;
//       }

//       if (tempMax <= targetIndex) {
//         tempMax = targetIndex;
//         startIndex = index;
//       }
//     }
//   }
//   return false;
// };

// 发现上面又重复遍历的项，想办法除掉
// index > max 注意，这个条件很关键
var canJump = function (nums) {
  let max = nums[0];
  const finalIndex = nums.length - 1;

  for (let index = 0; index < nums.length; index++) {
    if (index > max) break;

    max = Math.max(index + nums[index], max);
    if (max >= finalIndex) {
      return true;
    }
  }
  return false;
};

console.log(canJump([1, 2]));
console.log(canJump([1, 2, 3]));
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([1]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 5, 0, 0]));
console.log(canJump([3, 0, 8, 2, 0, 0, 1]));
console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
