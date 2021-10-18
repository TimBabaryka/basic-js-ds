const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor () {
    this.rootNode =null;
  }

  root() {
  return this.rootNode ? this.rootNode :null;
  }

  add(data) {
   this.rootNode = addNode(this.rootNode, data);
    function addNode(node, data){
      if(!node) {
        return new Node(data);
      }
      if(node.data ===data) {
        return node;
      }
      if(data < node.data) {
        node.right = addNode(node.right, data);
       
        
      } else {
        node.left = addNode(node.left, data);
        

      }
      return node;
    }
  }

  has( data ) {
   
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}