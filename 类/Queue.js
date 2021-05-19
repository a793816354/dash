class Queue {
  //   size = 0
  //   front = 0
  constructor() {
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  //返回 queue 中元素的个数
  size() {
    return this.backIndex - this.frontIndex;
  }

  //返回 queue 中第一个元素
  front() {
    return this[this.frontIndex];
  }

  //返回 queue 中最后一个元素的引用
  back() {
    return this[this.backIndex - 1];
  }

  //以移动的方式在 queue 的尾部添加元素
  push(data) {
    this[this.backIndex++] = data;
  }

  //删除 queue 中的第一个元素
  pop() {
    delete this[this.frontIndex];
    if (!this.empty()) {
      this.frontIndex++;
    }
  }

  //如果 queue 中没有元素的话，返回 true
  empty() {
    return this.frontIndex === this.backIndex;
  }

  //用传给 emplace() 的参数调用 T 的构造函数，在 queue 的尾部生成对象
  emplace(T) {
     this[this.backIndex++] = new T()
  }

  //将当前 queue 中的元素和参数 queue 中的元素交换
  swap(queue) {
    const innerSize = this.size();
    const outSize = queue.size();
    const max = Math.max(innerSize, outSize);

    for (let index = 0; index < max; index++) {
      const outFront = queue.front();
      if (outFront !== undefined && index < outSize) {
        //   console.log(outFront);
        this.push(outFront);
        queue.pop();
      }

      const innerFront = this.front();
      if (innerFront !== undefined && index < innerSize) {
        queue.push(innerFront);

        this.pop();
      }
    }
  }
}

const queue = new Queue();
queue.push("y");
queue.push("j");
queue.push("j");
console.log(queue);
queue.push("shu");
console.log(queue);
queue.pop();
console.log(queue);
console.log(queue.size());
console.log(queue.back());
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
console.log(queue);
console.log(queue.empty());
console.log(queue.front());
console.log(queue.back());
queue.push("y");
queue.push("j");
queue.push("j");

const queue2 = new Queue();
queue2.push("w");
queue2.push("z");
queue2.push("y");
queue2.push("m");
queue2.push("m");
// console.log(queue2);

queue.swap(queue2);
console.log(queue);
console.log(queue2);
