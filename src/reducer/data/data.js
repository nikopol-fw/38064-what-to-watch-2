import {keysToCamel} from '../../lib/keys-to-camel/keys-to-camel';


const initialState = {
  films: [],
};


const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};


const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
};


const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        response.data = response.data.map((film) => keysToCamel(film));
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
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
