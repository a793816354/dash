/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
  let result = 0;

  for (let index = 0; index < costs.length; index++) {
    const cost = costs[index];
    if (index < costs.length / 2) {
      result += cost[0];
    } else {
      result += cost[1];
    }
  }
  return result;
};
console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ])
);
console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);
