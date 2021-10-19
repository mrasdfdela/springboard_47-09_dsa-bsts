class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let node = this.root;
    const newNode = new Node(val);
    if (!node) this.root = newNode;
    while (node) {
      if (val < node.val) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = newNode;
          node = null;
        }
      } else {
        if (node.right) {
          node = node.right;
        } else {
          node.right = newNode;
          node = null;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    };
    
    function _insert(val, node) {
      if(node === null) return new Node(val);
      if(val < node.val) {
        node.left 
          ? _insert(val, node.left) 
          : node.left = _insert(val, node.left);
      } else {
        node.right
          ? _insert(val, node.right)
          : node.right = _insert(val, node.right);
      }
    }

    _insert(val,this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;
    
    while (node){
      if (node.val === val) {
        return node;
      } else if (node.val > val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    
    if (!node) return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function _find(val,cNode){
      if (cNode === null) return undefined;
      if (cNode.val === val) {
        return cNode;
      } 
      if (cNode.val < val) {
        return _find(val, cNode.right)
      } else {
        return _find(val, cNode.left);
      }
    }

    return _find(val, this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];
    function _traverse(node) {
      visitedNodes.push(node.val);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];
    function _traverse(node) {
      if (node.left) _traverse(node.left);
      visitedNodes.push(node.val);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];
    function _traverse(node) {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      visitedNodes.push(node.val);
    }
    _traverse(this.root);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visitedNodes = [];
    let visitQueue = [this.root];

    while(visitQueue.length){
      const c = visitQueue.shift();
      visitedNodes.push(c.val);
      for (let n of [c.left, c.right]) if (n) visitQueue.push(n)
    }

    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
