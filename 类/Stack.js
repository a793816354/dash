class Stack {
  constructor() {
    this.backIndex = 0;
  }

  //   返回一个栈顶元素的引用
  top() {
    return this[this.backIndex - 1];
  }

  //   返回一个栈顶元素的引用
  push(data) {
    this[this.backIndex++] = data
  }

  //   弹出栈顶元素
  pop() {
      if(this.backIndex>0){
         delete this[this.backIndex - 1];
    this.backIndex--;
      }
   
  }

  //   返回栈中元素的个数。
  size() {
    return this.backIndex;
  }

  //   在栈中没有元素的情况下返回 true
  empty() {
    return this.backIndex===0;
  }

//  用传入的参数调用构造函数，在栈顶生成对象。
  emplace(T) {
     this[this.backIndex++] = new T()
  }

// 将当前栈中的元素和参数中的元素交换。参数所包含元素的类型必须和当前栈的相同
  swap(stack) {
    //  分别弹出，分别用数组收集，分别插入
    // 这里不做了
  }
}

module.exports = Stack