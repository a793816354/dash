const hashFunc = (num) => {
  return Math.abs(num % 10);
};

/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
  this.hashTable = [];
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  const tableIndex = hashFunc(number);
  let hashTableItem = this.hashTable[tableIndex];

  if (hashTableItem) {
    hashTableItem[hashTableItem.length] = number;
  } else {
    this.hashTable[tableIndex] = [number];
  }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  for (let i = 0; i < this.hashTable.length; i++) {
    const hashTableItem = this.hashTable[i];
    if (Array.isArray(hashTableItem)) {
      for (let j = 0; j < hashTableItem.length; j++) {
        const num = hashTableItem[j];
        const targetNum = value - num;

        const targetTableItem = this.hashTable[hashFunc(targetNum)];
        if (Array.isArray(targetTableItem)) {
          for (let k = 0; k < targetTableItem.length; k++) {
            if (
              targetTableItem[k] === targetNum &&
              !(i === hashFunc(targetNum) && k === j)
            ) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

// const twoSum = new TwoSum();
// twoSum.add(1); // [] --> [1]
// twoSum.add(3); // [1] --> [1,3]
// twoSum.add(5); // [1,3] --> [1,3,5]
// console.log(twoSum.find(4)); // 1 + 3 = 4，返回 true
// console.log(twoSum.find(7)); // 没有两个整数加起来等于 7 ，返回 false
["TwoSum","add","add","add","add","find","find","find","find"]
[[],[0],[-1],[-1],[0],[-2],[0],[-1],[1]]

const twoSum = new TwoSum();
twoSum.add(0); 
twoSum.add(-1);
twoSum.add(-1);
twoSum.add(0); 
console.log(twoSum.find(-2));
console.log(twoSum.find(0));
console.log(twoSum.find(-1));
console.log(twoSum.find(1));