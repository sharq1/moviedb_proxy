import Router from './Router';
import SearchMediator from './SearchMediator';

const setContent = (content, params) => {
  console.log('setContent', content, params);
};

const router = new Router({
  setContent: setContent,
});

new SearchMediator({
  navigate: router.navigate,
  form: document.getElementById('searchForm'),
  searchInput: document.getElementById('searchQuery'),
  resultsContainer: document.getElementById('results'),
});

console.log('App started ✔');
