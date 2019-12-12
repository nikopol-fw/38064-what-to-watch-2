import {ActionCreator, ActionType, reducer} from './user';


const mockInitialState = {
  info: {},
};

const mock = {
  genreToChange: `Drama`,
};


// describe(`Action creators work correctly`, () => {
//
// });


describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(mockInitialState);
  });


});
