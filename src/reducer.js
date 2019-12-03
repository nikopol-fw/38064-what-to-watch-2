const initialState = {
  genre: `All genres`,
  films: [],
};


const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
};


const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
};


const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        console.log(response.data);
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
      });

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
  reducer,
  Operation,
};
