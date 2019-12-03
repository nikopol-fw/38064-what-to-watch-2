import {ActionCreator, ActionType, reducer} from './user';

import {films} from '../../mocks/films';


describe(`Business logic is correct`, () => {
  it(`Genres changing correctly`, () => {

  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creators for change genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Drama`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`,
    });
  });
});


describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      films,
    });
  });

  it(`Reducer should change genre by a given value`, () => {
    expect(reducer({
      genre: `All genres`,
      films,
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Fantasy`,
    })).toEqual({
      genre: `Fantasy`,
      films,
    });
  });
});
