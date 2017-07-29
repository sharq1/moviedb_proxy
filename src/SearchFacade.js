import TMDB from 'themoviedb-javascript-library';

/**
 * themoviedb facade - responsible for retrieving movie data from TheMobieDb
 */
export default class SearchFacade {
  constructor() {
    this.search = this.search.bind(this);

    this.tmdb = TMDB;
    this.tmdb.common.api_key = process.env.TMDB_KEY;
  }

  search(query) {
    return new Promise((resolve, reject) => {
      this.tmdb.search.getCollection(
        { query },
        (results) => resolve(results),
        (err) => reject(err)
      );
    });
  }
}
