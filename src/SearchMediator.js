import SearchFacade from './SearchFacade';

/**
 * Search mediator
 */
export default class SearchMediator {
  constructor({ navigate, form, searchInput, resultsContainer }) {
    this.db = new SearchFacade();
    this.navigate = navigate;
    this.form = form;
    this.searchInput = searchInput;
    this.resultsContainer = resultsContainer;

    this.form.addEventListener('submit', this.onSearchSubmit.bind(this));
  }

  onSearchSubmit() {
    const query = this.searchInput.value;

    this.db.search(query)
      .then((results) => {
        this.onSearchSuccess(results);
      })
      .catch((error) => {
        console.error('search failed', error);
      });
  }

  onSearchSuccess(data) {
    console.log('onSearchSuccess', data);
  }
}
