const { Node, LinkedList } = reqire("../../类/LinkedList.js");

// 哈希集合
// 思路：1.使用哈希函数把数组分片
//     2.使用链表做唯一的元素（方便增删）

/**
 * Initialize your data structure here.
 */
const hashFunc = (key) => {
  //思路：1.传入一个any，返回给数组用即index
  // 2.根据场景不同，使用的哈希函数也不同
  //   此处key为纯数字;
  //暂且分为20片

  return key % 20;
};

var MyHashSet = function () {
  this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  //添加的流程：先查找，再插入
  const index = hashFunc(key);

  if (!this.set[index]) {
    this.set[index] = new LinkedList();
    this.set[index].head = new Node(key);
    return;
  }

  if (this.set[index].contains(key)) {
    return;
  }

  this.set[index].add(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  //删除的流程：先查找，再删除
  const index = hashFunc(key);

  if (this.contains(key)) {
    const nodeIndex = this.set[index].indexOf(key) - 1;

    const node = this.set[index].get(nodeIndex);
    if (node === this.set[index].head) {
      this.set[index].head = null;
      return;
    }

    node.next = node.next ? node.next.next : null;
    return;
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const index = hashFunc(key);

  if (!this.set[index]) {
    return false;
  }

  return this.set[index].contains(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
