import Navigo from 'navigo';

/**
 * Router Facade and routes configuration combined
 */
export default class {
  constructor({ setContent }) {
    const rootUrl = null; // figures out itself
    const useHash = true;

    this.router = new Navigo(rootUrl, useHash);
    this.router.on({
      'movie/:id': function (params) {
        setContent('movie', params);
      },
      '/:query': function (params) {
        setContent('movies', params);
      },
      '*': function () {
        setContent('movies');
      },
    }).resolve();
  }

  navigate(params) {
    this.router.navigate(params);
  }
}
