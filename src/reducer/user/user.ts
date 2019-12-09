const initialState = {
  genre: `All genres`,
};


const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
};


const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
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
  reducer,
};
