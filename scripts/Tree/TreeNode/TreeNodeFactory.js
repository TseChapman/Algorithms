class TreeNodeFactory {
  /**
   * Create a TreeNode based on the type.
   * @param {string} type The string that represent the type of TreeNode that
   *  will be created.
   * @param {int} value The integer that represent the initial value of the
   *  TreeNode that will be created.
   * @returns a new TreeNode based on the inputted type.
   */
  static createTreeNode(type, value) {
    switch(type) {
      case "Normal" :
        return new NormalTreeNode(value);
      default:
        console.error("TreeNodeFactory: createTreeNode: Invalid type: ", type);
    }
  }
}