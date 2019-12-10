import {ActionCreator, ActionType, reducer} from './user';


const initialState = {
  genre: `All genres`,
  info: {},
};

const mock = {
  genreToChange: `Drama`,
};


describe(`Action creators work correctly`, () => {
  it(`Action creators for change genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(mock.genreToChange)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: mock.genreToChange,
    });
  });
});


describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change genre by a given value`, () => {
    expect(reducer({
      genre: `All genres`,
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Fantasy`,
    })).toEqual({
      genre: `Fantasy`,
    });
  });
});
