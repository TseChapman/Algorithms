/**
 * Expect an interface TreeNode that includes the following attributes:
 *
 * VARIABLES:
 *  value = The value that this node contains.
 *  leftNode = the left tree node.
 *  rightNode = the right tree node.
 *  elementId = the Id of the HTML element.
 * STATIC VARIABLES:
 * FUNCTIONS:
 *  getValue() = return the value stored in this node.
 *  setElementId(id) = set the elementId of this node.
 *  getElementId() = return the elementId of this node.
 * STATIC FUNCTIONS:
 */

class NormalTreeNode {
  /**
   * Constructor of the NormalTreeNode class.
   * @param {int} _value The integer that represent the initial value of the node.
   */
  constructor(_value) {
    this.value = _value;
    this.leftNode = null;
    this.rightNode = null;
    this.elementId = null;
  }

  /**
   * Set the left tree node of current node.
   * @param {NormalTreeNode} node The node that will be added to leftNode.
   */
  setLeftNode(node) {
    if (node instanceof NormalTreeNode) {
      this.leftNode = node;
    } else {
      console.error("NormalTreeNode: setLeftNode: node is not an instance of NormalTreeNode");
    }
  }

  /**
   * Set the right tree node of current node.
   * @param {NormalTreeNode} node The node that will be added to rightNode.
   */
  setRightNode(node) {
    if (node instanceof NormalTreeNode) {
      this.rightNode = node;
    } else {
      console.error("NormalTreeNode: setRightNode: node is not an instance of NormalTreeNode");
    }
  }

  /**
   * Return the tree node's value.
   * @returns The value that this node contains.
   */
  getValue() {
    return this.value;
  }

  /**
   * Set the elementId value to inputed id.
   * @param {string} id The HTML element's id.
   */
  setElementId(id) {
    this.elementId = id;
  }

  /**
   * Return the elementId value of this node.
   * @returns A string that represent an HTML element's id.
   */
  getElementId() {
    return this.elementId;
  }
}