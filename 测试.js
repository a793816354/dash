// const binarySearch = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;

//   while (end >= start) {
//     const mid = start + Math.floor((end - start) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     }

//     if (target > arr[mid]) {
//       start = mid + 1;
//     }

//     if (target < arr[mid]) {
//       end = mid - 1;
//     }
//   }

//   return -1;
// };

// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (numbers, target) {
//   let left = 0;

//   while (left < numbers.length) {
//     const value = target - numbers[left];
//     const valueIndex = binarySearch(numbers, value);
//     if (valueIndex !== -1) {
//       return [left + 1, left === valueIndex ? valueIndex + 2 : valueIndex + 1];
//     }
//     left++;
//   }
// };
// // twoSum([2, 3, 4], 6);
// // twoSum([2, 7, 11, 15], 9);
// console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));

// const sum = (arr) => {
//   if (!arr.length) {
//     return 0;
//   }
//   return arr[0] > sum(arr.slice(1)) ? arr[0] : sum(arr.slice(1));
// };
// console.log(sum([1, 9, 3]));

const binarySearch = (arr, target) => {
  if (arr.length === 0) {
    return -1;
  }

  const mid = Math.floor(arr.length / 2);
  const midVal = arr[mid];
  if (midVal === target) {
    return mid;
  } else if (midVal < target) {
    return binarySearch(arr.slice(mid + 1), target) === -1
      ? -1
      : mid + 1 + binarySearch(arr.slice(mid + 1), target);
  } else {
    return binarySearch(arr.slice(0, mid), target) === -1
      ? -1
      : binarySearch(arr.slice(0, mid), target);
  }
};
console.log(binarySearch([2, 7, 9, 15], 15));
