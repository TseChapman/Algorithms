class Homepage {
  static card_dict = {
    'trees_card' : 'trees_page',
    'graphs_card' : 'graphs_page',
    'structures_card' : 'structures_page',
    'sorting_card' : 'sorting_page'
  };

  /**
   * Initialize all the cards in homepage.
   */
  static initCards() {
    for (var key in Homepage.card_dict) {
      let card = Helper.id(key);
      let tempKey = key;
      card.addEventListener("click", function() {
        // Hide homepage.
        let home_page = Helper.id("home_page");
        Helper.addClassIfNotExists([home_page], 'hidden');
        // Hide all other pages.
        Helper.hideAllPages(Homepage.card_dict);
        // Display the specific card's page.
        let page = Helper.id(Homepage.card_dict[tempKey]);
        Helper.removeClassIfExists([page], 'hidden');
      });
    }
  }
}