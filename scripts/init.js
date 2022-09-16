'use strict';

(function() {
  var navDict;

  window.addEventListener("load", init);

  function init() {
    initNavButtons();
  }

  function initNavButtons() {
    navDict = {
      'nav_title' : 'home_page',
      'nav_trees' : 'trees_page',
      'nav_graphs' : 'graphs_page',
      'nav_structures' : 'structures_page',
      'nav_sorting' : 'sorting_page'
    }
    for (var key in navDict) {
      let nav = Helper.id(key);
      let tempKey = key;
      nav.addEventListener("click", function() {
        hideAllPages();
        returnToPageByNav(tempKey);
      });
    }
  }

  function returnToPageByNav(key) {
    let page = Helper.id(navDict[key]);
    Helper.removeClassIfExists([page], 'hidden');
  }

  function hideAllPages() {
    for (var key in navDict) {
      let page = Helper.id(navDict[key]);
      Helper.addClassIfNotExists([page], 'hidden');
    }
  }
})();