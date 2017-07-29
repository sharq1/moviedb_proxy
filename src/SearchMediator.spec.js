import SearchMediator from './SearchMediator';

jest.mock('./SearchFacade');

test('themoviedb search gets called on search', (done) => {
  const queryEventName = 'queryTriggered';
  const searchMediator = new SearchMediator({ queryEventName });
  const event = new CustomEvent(queryEventName, { detail: 'harry' });

  searchMediator.onSearchSubmit(event).then((results) => {
    expect(results).toEqual(true);
    done();
  });
});
