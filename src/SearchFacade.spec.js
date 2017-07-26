import SearchFacade from './SearchFacade';

jest.mock('themoviedb-javascript-library', () => ({
  common: {},
  search: {
    getCollection: jest.fn((query, success, error) => {
      Promise.resolve(success('GREAT'));
    }),
  },
}));

test('themoviedb search gets called on search', (done) => {
  const facade = new SearchFacade();

  facade.search('query').then((results) => {
    expect(results).toEqual('GREAT');
    done();
  });
});
