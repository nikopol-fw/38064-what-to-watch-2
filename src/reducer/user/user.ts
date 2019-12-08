const initialState = {
  isAuth: false,
  genre: `All genres`,
};


const ActionType = {
  AUTHENTICATION: `AUTHENTICATION`,
  CHANGE_GENRE: `CHANGE_GENRE`,
};


const ActionCreator = {
  authentication: (is) => ({
    type: ActionType.AUTHENTICATION,
    // payload: userData,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};


const Operation = {
  authorize: () => (dispatch, _getState, api) => {
    return api.post(`/login`)
      .then((response) => {
        console.log(response);
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTHENTICATION:
      return Object.assign({}, state, {
        // isAuth: action.
      });

    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
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
