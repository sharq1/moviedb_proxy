/**
 * Search form handler - listens to submit event in case of which it send URL update request
 */
export default class SearchForm {
  constructor({ navigate, form, searchInput }) {
    this.navigate = navigate;
    this.searchInput = searchInput;

    form.addEventListener('submit', this.onSearchSubmit.bind(this));
  }

  onSearchSubmit() {
    const query = this.searchInput.value;

    return this.navigate(`/${query}`);
  }
}
