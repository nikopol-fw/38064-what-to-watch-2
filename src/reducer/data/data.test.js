import MockAdapter from 'axios-mock-adapter';

import {films} from '../../mocks/films';
import {createAPI} from '../../api';
import {ActionCreator, ActionType, Operation} from './data';
import {reducer} from '../data/data';
import {reviews} from '../../mocks/reviews';
import {updateFilm} from '../../lib/update-film/update-film';


const mockInitialState = {
  favorites: [],
  films: [],
  promoId: null,
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
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(mockInitialState);
  });


  it(`LOAD_FAVORITES`, () => {
    const action = {
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    };

    expect(reducer(mockInitialState, action)).toEqual(
        Object.assign({}, mockInitialState, {
          favorites: films,
        })
    );
  });


  it(`LOAD_FILMS`, () => {
    const action = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(reducer(mockInitialState, action)).toEqual(
        Object.assign({}, mockInitialState, {
          films,
        })
    );
  });


  it(`LOAD_PROMO`, () => {
    const action = {
      type: ActionType.LOAD_PROMO,
      payload: 1,
    };

    expect(reducer(mockInitialState, action)).toEqual(
        Object.assign({}, mockInitialState, {
          promoId: 1,
        })
    );
  });


  it(`LOAD_REVIEWS`, () => {
    const action = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(reducer(mockInitialState, action)).toEqual(
        Object.assign({}, mockInitialState, {
          reviews,
        })
    );
  });


  it(`SET_FAVORITE_STATUS`, () => {
    const action = {
      type: ActionType.SET_FAVORITE_STATUS,
      payload: films[0],
    };

    expect(reducer(mockInitialState, action)).toEqual(
        Object.assign({}, mockInitialState, {
          films: updateFilm(mockInitialState.films, films[0]),
        })
    );
  });


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
