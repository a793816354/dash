const BinaryTreeNode = require("../../类/tree.js");
const Stack = require("../../类/Stack.js");

let index = 1;
const getRandomNum = () => {
  //   return Math.floor(Math.random() * 100);
  return index++;
};

//随机产生n个节点
const getRandomBinaryTree = (num) => {
  if (num > 0) {
    const BinaryTree = new BinaryTreeNode(
      getRandomNum(),
      getRandomBinaryTree(num - 1),
      getRandomBinaryTree(num - 1)
      //   Math.random() < 0.9 ? getRandomBinaryTree(num - 1) : null,
      //   Math.random() < 0.9 ? getRandomBinaryTree(num - 1) : null
    );
    BinaryTree.setParentNode(BinaryTree);
    return BinaryTree;
  }
  return null;
};

const tree = getRandomBinaryTree(4);

const ldr = () => {
  const stack = new Stack();
  stack.push(tree);
  const arr = [];

  while (stack.top() !== undefined) {
    const cur = stack.top();
    stack.pop();

    if (cur.getRight()) {
      stack.push(cur.getRight());
    }

    stack.push(cur);

    if (cur.getLeft()) {
      stack.push(cur.getLeft());
    } else {
      arr.push(cur.getValue());
      stack.pop();

      if (!cur.getRight()) {
        stack.top() !== undefined ? arr.push(stack.top().getValue()) : "";
        stack.pop();
      }
    }
  }
  return arr;
};
// ldr();
console.log(ldr());
