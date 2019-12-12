import MockAdapter from 'axios-mock-adapter';

import {createAPI} from '../../api';
import {ActionCreator, ActionType, Operation} from './data';
import {films} from '../../mocks/films';
import {reducer} from '../data/data';


const mockInitialState = {
  favorites: [],
  films: [],
  promo: null,
  reviews: [],
};

const mock = {
  film: films[0],
  isPlaying: false,
  index: 0,
  onCardMouseEnter: () => void (0),
  onCardMouseLeave: () => void (0),
};


describe(`Action creators work correctly`, () => {
  it(`Action creators for load films returns correct action`, () => {
    expect(ActionCreator.loadFilms(mock.films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: mock.films,
    });
  });
});


describe(`Reducer works correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });
});
