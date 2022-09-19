'use strict';

(function() {
  // Dictionary about the nav bar's id to page id pairs.
  var navDict = {
    'nav_title' : 'home_page',
    'nav_trees' : 'trees_page',
    'nav_graphs' : 'graphs_page',
    'nav_structures' : 'structures_page',
    'nav_sorting' : 'sorting_page'
  };

  window.addEventListener("load", init);

  /**
   * Initialize the website.
   */
  function init() {
    initNavButtons();
    initNavIcon();
    Homepage.initCards();
    Treepage.initSidebarButton();
  }

  /**
   * Initialize the nav bar for viewing different pages.
   */
  function initNavButtons() {
    for (var key in navDict) {
      let nav = Helper.id(key);
      let tempKey = key;
      nav.addEventListener("click", function() {
        // Hide all the pages.
        Helper.hideAllPages(navDict);
        // Display the nav specific page.
        returnToPageByNav(tempKey);
        // Hide responsive nav bar
        let nav = Helper.id("nav_bar");
        if (nav.className === "home_page_nav responsive") {
          Helper.removeClassIfExists([nav], "responsive");
        }
      });
    }
  }

  /**
   * Initialize the nav bar's responsive icon
   */
  function initNavIcon() {
    let icon = Helper.id("nav_icon");
    icon.addEventListener("click", function() {
      let nav = Helper.id("nav_bar");
      if (nav.classList.contains("responsive")) {
        Helper.removeClassIfExists([nav], "responsive");
      } else {
        Helper.addClassIfNotExists([nav], "responsive");
      }
    });
  }

  /**
   * Unhide the selected page from the nav bar click event.
   * @param {string} key The key that will translate to a page id.
   */
  function returnToPageByNav(key) {
    let page = Helper.id(navDict[key]);
    Helper.removeClassIfExists([page], 'hidden');
  }
})();