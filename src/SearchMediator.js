import SearchFacade from './SearchFacade';

/**
 * Search mediator
 */
export default class {
  constructor({ navigate, form }) {
    this.db = new SearchFacade();
    this.navigate = navigate;
    this.form = form;

    this.form.addEventListener('submit', (data) => { console.log('submit', data) });
  }
}
