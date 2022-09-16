class Helper {
  /**
   * id helper function
   * @param {String} idName name of id
   * @return {Object} element with id name
   */
  static id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  static qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  static qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  static gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Remove all the children within the parent object.
   * @param {List} parent Parent DOM object.
   */
  static removeAllChildNodes(parent) {
    while (parent[0].firstChild) {
        parent[0].removeChild(parent[0].firstChild);
    }
  }

  /**
   * Remove a class from an object if it already exists in the classList.
   * @param {List} object DOM object that will remove a class.
   * @param {string} className The name of the class that will be removed.
   */
  static removeClassIfExists(object, className) {
    if (object[0].classList.contains(className)) {
      object[0].classList.remove(className);
    }
  }

  /**
   * Add a class into an object if it does not contain the class in classList.
   * @param {List} object DOM object that will add a class.
   * @param {string} className The name of the class that will be added.
   */
  static addClassIfNotExists(object, className) {
    if (!object[0].classList.contains(className)) {
      object[0].classList.add(className);
    }
  }
}