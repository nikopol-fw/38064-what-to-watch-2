import {AxiosInstance} from "axios";

import {keysToCamel} from '../../lib/keys-to-camel/keys-to-camel';
import {Film} from "../../models/Film";


const initialState = {
  favorites: [],
  films: [],
  promo: null,
};


const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  SET_FAVORITE_STATUS: `SET_FAVORITE_STATUS`,
};


const ActionCreator = {
  loadFavorites: (films: Film[]) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: films,
  }),
  loadFilms: (films: Film[]) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (promo: Film) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo,
  }),
  setFavoriteStatus: (isFavorite: boolean) => ({
    type: ActionType.SET_FAVORITE_STATUS,
    payload: isFavorite,
  }),
};


const Operation = {
  loadFavorites: () => (dispatch, _getState, api: AxiosInstance) => {
    return api.get(`/favorite`)
      .then((response) => {
        if (response && response.status === 200) {
          response.data = response.data.map((film: any) => keysToCamel(film));
          dispatch(ActionCreator.loadFavorites(response.data));
        }
      });
  },

  loadFilms: () => (dispatch, _getState, api: AxiosInstance) => {
    return api.get(`/films`)
      .then((response) => {
        if (response && response.status === 200) {
          response.data = response.data.map((film: any) => keysToCamel(film));
          dispatch(ActionCreator.loadFilms(response.data));
        }
      });
  },

  loadPromo: () => (dispatch, _getState, api: AxiosInstance) => {
    return api.get(`/films/promo`)
      .then((response) => {
        if (response && response.status === 200) {
          response.data = keysToCamel(response.data);
          dispatch(ActionCreator.loadPromo(response.data));
        }
      });
  },

  setFavoriteStatus: (filmId: number, status: 0 | 1) => (dispatch, _getState, api: AxiosInstance) => {
    return api.post(`/favorite/${filmId}/${status}`)
      .then((response) => {
        if (response && response.status === 200) {
          dispatch(ActionCreator.setFavoriteStatus(response.data[`is_favorite`]));
        }
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favorites: action.payload,
      });

    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });

    case ActionType.LOAD_PROMO:
      return Object.assign({}, state, {
        promo: action.payload,
      });

    case ActionType.SET_FAVORITE_STATUS:
      return Object.assign({}, state, {
        promo: Object.assign({}, state.promo, {
          isFavorite: action.payload,
        })
      });
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
