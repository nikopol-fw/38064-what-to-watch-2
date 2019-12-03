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


const isObject = (value) => {
  return value && typeof value === `object` && value.constructor === Object;
};

const snakeToCamel = (str) => {
  return str.replace(
      /([-_][a-z])/gi,
      ($1) => $1
      .toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``));
};

const keysToCamel = (obj) => {
  if (isObject(obj)) {
    const newObj = {};

    Object.keys(obj)
      .forEach((key) => {
        newObj[snakeToCamel(key)] = keysToCamel(obj[key]);
      });
    return newObj;

  } else if (Array.isArray(obj)) {
    return obj.map((item) => keysToCamel(item));
  }

  return obj;
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
