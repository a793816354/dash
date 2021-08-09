/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  if (!ratings.length) return 0;
  let result = 0;
  let lastValue = 1;
  let flag = ""; //true大于 false小于

  for (let index = ratings.length - 1; index >= 0; index--) {
    const ele = ratings[index];
    const lastEle =
      ratings[index - 1] === undefined ? Infinity : ratings[index - 1];

    if (ele === lastEle) {
      lastValue = 1;
      flag = "";
    } else if (flag === "asc") {
      lastValue++;
    } else {
      lastValue = 1;
    }
    result += lastValue;
    if (ele > lastEle) {
      result++;
    }
    console.log(result);
    flag = ele < lastEle ? "asc" : "dec";
    console.log(ele);
    console.log(lastEle);
    console.log(flag);
  }

  return result;
};
// console.log(candy([1, 0, 2]));
// console.log(candy([1, 2, 2]));

// console.log(candy([1, 3, 2, 2, 1]));
console.log(candy([1, 2, 87, 87, 87, 2, 1]));
