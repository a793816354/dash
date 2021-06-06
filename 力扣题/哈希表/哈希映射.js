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
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const myHashMap = new MyHashMap();
myHashMap.put(1, 1); // myHashMap 现在为 [[1,1]]
myHashMap.put(2, 2); // myHashMap 现在为 [[1,1], [2,2]]
console.log(myHashMap.get(1)); // 返回 1 ，myHashMap 现在为 [[1,1], [2,2]]
console.log(myHashMap.get(3)); // 返回 -1（未找到），myHashMap 现在为 [[1,1], [2,2]]
myHashMap.put(2, 1); // myHashMap 现在为 [[1,1], [2,1]]（更新已有的值）
console.log(myHashMap.get(2)); // 返回 1 ，myHashMap 现在为 [[1,1], [2,1]]
myHashMap.remove(2); // 删除键为 2 的数据，myHashMap 现在为 [[1,1]]
console.log(myHashMap.get(2)); // 返回 -1（未找到），myHashMap 现在为 [[1,1]]
