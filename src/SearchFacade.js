import TMDB from 'themoviedb-javascript-library';

/**
 * themoviedb facade
 */
export default class {
  constructor() {
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
