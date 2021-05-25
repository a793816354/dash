class TreeNode {
  #parentNode = null;
  #value = null;
  constructor(value) {
    this.#value = value;
  }

  getParent() {
    return this.#parentNode;
  }

  setParentNode(node) {
    this.#parentNode = node;
  }

  getValue() {
    return this.#value;
  }
}

module.exports = class BinaryTreeNode extends TreeNode {
  #left = null;
  #right = null;
  constructor(value, left, right) {
    super(value);
    this.#left = left;
    this.#right = right;

    left && left.setParentNode(this);
    right && right.setParentNode(this);
  }

  getLeft() {
    return this.#left;
  }
  getRight() {
    return this.#right;
  }
};
