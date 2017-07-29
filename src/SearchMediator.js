import SearchFacade from './SearchFacade';

/**
 * Search mediator - listens to search event and transforms it to query for SearchFacade
 */
export default class SearchMediator {
  constructor({ queryEventName, resultsContainer }) {
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.db = new SearchFacade();
    this.resultsContainer = resultsContainer;

    document.addEventListener(queryEventName, this.onSearchSubmit.bind(this));
  }

  onSearchSubmit(event) {
    const query = event.detail;

    return this.db.search(query)
      .then((results) => this.onSearchSuccess(results))
      .catch((error) => {
        console.error('search failed', error);
        return { error };
      });
  }

  onSearchSuccess(data) {
    console.log('onSearchSuccess', data);
    return true;
  }
}
