const dlr = () => {
  let result = [];
  if (!root) return result;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    const { left, right, val } = node;

    if (right) {
      stack.push(right);
    }
    if (left) {
      stack.push(left);
    }
  }
  return result;
};

const ldr = () => {
  let result = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();

    root = node.right;
  }
  return result;
};
