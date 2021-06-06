// 思路：1.根据位数拆分数字，平方相加
// 2.检测相加结果，无则添加到set，有则返回false

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  while (!set.has(n)) {
    set.add(n);

    let newN = 0;

    while (n >= 1) {
      const restNum = n % 10;
      newN += restNum * restNum;
      n = Math.floor(n / 10);
    }

    if (newN === 1) {
      return true;
    }

    n = newN;
  }

  return false;
};
