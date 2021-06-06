class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setValue(value) {
    this.value = value;
  }

  setNext(next) {
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  initNode(value) {
    if (!this.head) {
      this.head = new Node(value);
      return true;
    }
  }

  // 设置指定位置的元素
  set(index, value) {
    const node = this.get(index);
    if (!node) return;

    node.value = value;
  }

  //尾部添加
  add(value) {
    if (this.initNode(value)) return true;

    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    const nextNode = new Node(value);
    lastNode.setNext(nextNode);

    return true;
  }

  //尾部删除
  remove() {
    if (!this.head) return this.head;

    let lastNode = this.head;
    while (lastNode.next && lastNode.next.next) {
      lastNode = lastNode.next;
    }
    const result = lastNode.next;

    lastNode.next = null;
    return result;
  }

  //头部添加
  offer(value) {
    if (this.initNode(value)) return true;
    const node = new Node(value);
    node.setNext(this.head);
    this.head = node;

    return true;
  }

  //头部删除
  poll() {
    const result = this.head;

    if (this.head) {
      this.head = this.head.next || null;
    }

    return result;
  }

  //判断是否含有某一元素。
  contains(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  //查找指定元素从前往后第一次出现的索引。
  indexOf(value) {
    let node = this.head;
    let index = 0;

    while (node) {
      if (node.value === value) {
        return index;
      }
      node = node.next;
      index++;
    }

    return -1;
  }

  //返回指定位置的元素，大于长度返回最后一个，小于0等于0返回第一个
  get(index) {
    let node = this.head;

    while (index > 0 && node && node.next) {
      node = node.next;
      index--;
    }
    return node;
  }

  //返回第一个元素
  peek() {
    return this.head;
  }

  //返回最后一个元素
  peekLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  //清空链表
  clear() {
    this.head = null;
  }

  //克隆该列表
  clone() {
    let node = this.head;
    const newList = new LinkedList();
    while (node) {
      const { value } = node;
      newList.add(value);
      node = node.next;
    }
    return newList;
  }

  //返回链表元素个数
  size() {
    const lastNode = this.peekLast();
    return lastNode ? this.indexOf(lastNode.value) + 1 : 0;
  }

  //返回一个由链表元素组成的数组
  toArray() {}
}

const linkedList = new LinkedList();
linkedList.add("yuan");
linkedList.add("jia");
linkedList.offer("jun");
// console.log(linkedList.get(1));
// console.log(linkedList.remove());
// console.log(linkedList.poll());
// console.log(linkedList);

console.log(linkedList.contains("jia"));
console.log(linkedList.indexOf("yuan"));
console.log(linkedList.set(1, "shuai"));
console.log(linkedList);
console.log(linkedList.clone());
console.log(linkedList.clone() === linkedList);
console.log(linkedList.clone().size());

module.exports = {
  Node,
  LinkedList,
};
