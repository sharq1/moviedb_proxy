import Router from './Router';
import SearchForm from './SearchForm';
import SearchMediator from './SearchMediator';

const QUERY_TRIGGERED = 'QUERY_TRIGGERED';

new SearchMediator({
  queryEventName: QUERY_TRIGGERED,
  resultsContainer: document.getElementById('results'),
});

const routeChanged = (content, params) => {
  document.dispatchEvent(new CustomEvent(QUERY_TRIGGERED, { detail: params.query }));
};

const router = new Router({
  routeChanged,
});

new SearchForm({
  navigate: router.navigate,
  form: document.getElementById('searchForm'),
  searchInput: document.getElementById('searchQuery'),
});

console.log('App started ✔');
