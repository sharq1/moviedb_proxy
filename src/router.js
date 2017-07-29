import Navigo from 'navigo';

/**
 * Router Facade and routes configuration combined
 */
export default class {
  constructor({ routeChanged }) {
    this.navigate = this.navigate.bind(this);

    const rootUrl = null; // figures out itself
    const useHash = true;

    this.router = new Navigo(rootUrl, useHash);
    this.router.on({
      'movie/:id': function (params) {
        routeChanged('movie', params);
      },
      '/:query': function (params) {
        routeChanged('movies', params);
      },
      '*': function () {
        routeChanged('movies');
      },
    }).resolve();
  }

  navigate(params) {
    this.router.navigate(params);
  }
}
