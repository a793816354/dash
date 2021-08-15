/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//全加器
var getSum = function (a, b) {
  let flag = 0;
  let result = 0;

  for (let index = 0; index < 32; index++) {
    const curPowerValueSum = ((a >> index) & 1) + ((b >> index) & 1) + flag;
    if (curPowerValueSum % 2 === 1) {
      result += 1 << index;
    }
    flag = Number(curPowerValueSum > 1);
  }
  return result;
};

// console.log(getSum(20, 30));
console.log(getSum(-12, -8));
