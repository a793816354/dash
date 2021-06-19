const hashFunc = (num) => {
  return Math.abs(num % 10);
};

const LinkedListNode = function (val) {
  this.val = val;
  this.next = null;
};

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.hashTable = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const hashIndex = hashFunc(val);
  const hashItem = this.hashTable[hashIndex];
  if (hashItem) {
    hashItem.next = new LinkedListNode(val);
  } else {
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
