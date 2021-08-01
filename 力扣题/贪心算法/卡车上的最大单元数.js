/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let result = 0;

  for (let index = 0; index < boxTypes.length; index++) {
    if (truckSize) {
      const [numberOfBoxesi, numberOfUnitsPerBoxi] = boxTypes[index];
      const formatNumberOfBoxesi = Math.min(numberOfBoxesi, truckSize);
      truckSize -= formatNumberOfBoxesi;
      result += formatNumberOfBoxesi * numberOfUnitsPerBoxi;
    } else {
      break;
    }
  }
  return result;
};
console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
