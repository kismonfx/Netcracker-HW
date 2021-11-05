class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (typeof data !== "number") {
      console.log("only numbers!");
    } else {
      let newNode = new Node(data);
      if (!this.root) {
        this.root = newNode;
        return;
      }
      let currentNode = this.root;
      while (currentNode) {
        if (newNode.data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }
}

const BT = new BinaryTree();
BT.insert(16);
BT.insert(9);
BT.insert(17);
BT.insert(4);
BT.insert(10);
BT.insert(30);
BT.insert("aaa");
console.log(BT);
BT.inOrderTraversal(BT.root);
