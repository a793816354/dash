// const radixSort = (array) => {
//   let max = array[0];
//   for (let index = 1; index < array.length; index++) {
//     if (max < array[index]) {
//       max = array[index];
//     }
//   }
//   let maxRadix = 1;
//   while (max / 10 >= 1) {
//     maxRadix++;
//     max /= 10;
//   }

//   for (let i = 0; i < maxRadix; i++) {
//     let bucket = [];
//     for (let j = 0; j < array.length; j++) {
//       const ele = array[j];
//       const strEle = `${ele}`;
//       const curRadixEle = strEle[strEle.length - 1 - i] || 0;
//       if (bucket[curRadixEle]) {
//         bucket[curRadixEle].push(ele);
//       } else {
//         bucket[curRadixEle] = [ele];
//       }
//     }

//     let arrIndex = 0;
//     for (let index = 0; index < bucket.length; index++) {
//       const curCell = bucket[index] || [];
//       const curCellLength = curCell.length - 1;
//       let bucketEleIndex = curCellLength;
//       while (bucketEleIndex > -1) {
//         array[arrIndex] = curCell[curCellLength - bucketEleIndex];
//         arrIndex++;
//         bucketEleIndex--;
//       }
//     }
//   }
//   return array;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumGap = function (nums) {
//   if (nums.length < 2) return 0;
//   radixSort(nums);
//   let max = 0;
//   for (let index = 0; index < nums.length - 1; index++) {
//     const gap = nums[index + 1] - nums[index];
//     if (max < gap) {
//       max = gap;
//     }
//   }
//   return max;
// };

const radixSort = (array) => {
  let max = array[0];
  for (let index = 1; index < array.length; index++) {
    if (max < array[index]) {
      max = array[index];
    }
  }
  let maxRadix = 1;
  while (max / 10 >= 1) {
    maxRadix++;
    max /= 10;
  }

  for (let i = 0; i < maxRadix; i++) {
    let bucket = [];
    for (let j = 0; j < array.length; j++) {
      const ele = array[j];
      const strEle = `${ele}`;
      const curRadixEle = strEle[strEle.length - 1 - i] || 0;
      if (bucket[curRadixEle]) {
        bucket[curRadixEle].push(ele);
      } else {
        bucket[curRadixEle] = [ele];
      }
    }

    let arrIndex = 0;
    for (let index = 0; index < bucket.length; index++) {
      const curCell = bucket[index] || [];
      const curCellLength = curCell.length - 1;
      let bucketEleIndex = curCellLength;
      while (bucketEleIndex > -1) {
        array[arrIndex] = curCell[curCellLength - bucketEleIndex];
        arrIndex++;
        bucketEleIndex--;
      }
    }
  }
  return array;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const base = 10000;
  for (let index = 0; index < nums.length; index++) {
    nums[index] += base;
  }

  radixSort(nums);
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index] - base;
    index++;
  }
  return sum;
};
