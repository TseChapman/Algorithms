class Treepage {

  constructor() {
    this.playBar = new PlayBar();
    this.algorithm = null;
    this.root = null;
  }

  /**
   * Initialize the button within the sidebar in tree page.
   */
  static initSidebarButton() {
    let button = Helper.qs(".sidebar > button");
    button.addEventListener("click", function() {
      // Resize the tree content and side bar
      let treeContent = Helper.qs(".grid_container > .tree_content");
      let sidebar = Helper.qs(".grid_container > .sidebar");
      sidebar.classList.toggle("sidebar_small");
      treeContent.classList.toggle("tree_content_large");
      // Change the button icon
      let icon = Helper.qs(".sidebar > button > div");
      if (icon.className === "arrow_left") {
        icon.className = "arrow_right";
      } else {
        icon.className = "arrow_left";
      }
    });
  }
}