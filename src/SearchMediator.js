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

  /**
   * Pass search to facade
   */
  onSearchSubmit(event) {
    const query = event.detail;

    return this.db.search(query)
      .then((results) => this.onSearchSuccess(results))
      .catch((error) => {
        console.error('search failed', error);
        return { error };
      });
  }


  /**
   * Parse response and yield results into DOM
   */
  onSearchSuccess(response) {
    const template = document.getElementById('movies').innerHTML;

    // @todo: create virtual DOM element and append to it and then replace #results content with it
    document.getElementById('results').innerHTML = '';
    JSON.parse(response).results.forEach((movie) => {
      const el = document.createElement('div');

      el.innerHTML = template;
      if (movie.poster_path) {
        el.getElementsByClassName('movie--poster')[0].src = process.env.IMAGE_BASE_URL + movie.poster_path;
      }
      el.getElementsByClassName('movie--name')[0].innerHTML = movie.name;

      document.getElementById('results').appendChild(el);
    });

    return true;
  }
}
