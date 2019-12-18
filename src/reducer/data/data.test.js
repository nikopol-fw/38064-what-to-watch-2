import MockAdapter from 'axios-mock-adapter';

import {films} from '../../mocks/films';
import {reviews} from '../../mocks/reviews';
import {updateFilm} from '../../lib/update-film/update-film';
import {ActionCreator, ActionType, Operation, reducer} from './data';
import {createAPI} from '../../api';


const mockInitialState = {
  favorites: [],
  films: [],
  promoId: null,
  reviews: [],
};


describe(`Action creators work correctly`, () => {
  it(`loadFavorites`, () => {
    expect(ActionCreator.loadFavorites(films)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    });
  });


  it(`loadFilms`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films,
    });
  });


  it(`loadPromo`, () => {
    expect(ActionCreator.loadPromo(1)).toEqual({
      type: ActionType.LOAD_PROMO,
      payload: 1,
    });
  });


  it(`loadReviews`, () => {
    expect(ActionCreator.loadReviews(reviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    });
  });


  it(`setFavoriteStatus`, () => {
    expect(ActionCreator.setFavoriteStatus(films[0])).toEqual({
      type: ActionType.SET_FAVORITE_STATUS,
      payload: films[0],
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
});


describe(`API works correctly`, () => {
  it(`loadFavorites`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loader = Operation.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return loader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}],
        });
      });
  });


  it(`loadFilms`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return loader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });


  it(`loadPromo`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loader = Operation.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, {id: 1});

    return loader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: 1,
        });
      });
  });


  it(`loadReviews`, () => {
    const mockFilmId = 1;
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loader = Operation.loadReviews(mockFilmId);

    apiMock
      .onGet(`/comments/${mockFilmId}`)
      .reply(200, [{date: `2019-12-09T10:46:15.934Z`}]);

    return loader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{date: new Date(`2019-12-09T10:46:15.934Z`)}],
        });
      });
  });


  it(`setFavoriteStatus`, () => {
    const mock = {
      filmId: 1,
      status: 0,
    };
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loader = Operation.setFavoriteStatus(mock.filmId, mock.status);

    apiMock
      .onPost(`/favorite/${mock.filmId}/${mock.status}`)
      .reply(200, {fake: true});

    return loader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_STATUS,
          payload: {fake: true},
        });
      });
  });
});
