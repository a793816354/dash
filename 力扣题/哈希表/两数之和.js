const Node = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
};

const hashFunc = (key) => {
  return key % 5;
};

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.map = [];
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const mapIndex = hashFunc(key);
  const mapItem = this.map[mapIndex];
  const newNode = new Node(key, value);
  let lastNode = mapItem;

  if (mapItem) {
    let node = this.map[mapIndex];
    while (node) {
      if (!node.next) {
        lastNode = node;
      }

      if (node.key === key) {
        node.value = value;
        return;
      }

      node = node.next;
    }

    lastNode.next = newNode;
  } else {
    this.map[mapIndex] = newNode;
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const mapIndex = hashFunc(key);
  const mapItem = this.map[mapIndex];

  if (mapItem) {
    let node = this.map[mapIndex];
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
  }
  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const mapIndex = hashFunc(key);
  let mapItem = this.map[mapIndex];
  let node = mapItem;

  while (node) {
    if (node.key === key) {
      if (node === mapItem) {
        this.map[mapIndex] = null;
      } else {
        node.next = node.next ? node.next.next : null;
      }
    }

    node = node.next;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const myHashMap = new MyHashMap();

  for (let index = 0; index < nums.length; index++) {
    myHashMap.put(nums[index], index);
  }

  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];

    const otherIndex = myHashMap.get(diff);
    if (otherIndex !== -1 && index !== otherIndex) {
      return [index, otherIndex];
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//使用自带的obj
var twoSum2 = function (nums, target) {
  const obj = {
    [nums[0]]: 0,
  };

  for (let index = 1; index < nums.length; index++) {
    const ele = nums[index];

    const diff = target - ele;

    const otherIndex = obj[diff];
    console.log(obj);
    console.log(otherIndex);
    if (otherIndex !== undefined && index !== otherIndex) {
      return [otherIndex, index];
    }

    obj[ele] = index;
  }
};

twoSum2([3, 3], 6);
