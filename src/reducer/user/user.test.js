import {ActionCreator, ActionType, reducer} from './user';
import {films} from '../../mocks/films';
import {user} from '../../mocks/user';


const mockInitialState = {
  info: {},
};


describe(`Action creators work correctly`, () => {
  it(`resetUserInfo`, () => {
    expect(ActionCreator.resetUserInfo()).toEqual({
      type: ActionType.RESET_USER,
    });
  });


  it(`updateUserInfo`, () => {
    expect(ActionCreator.updateUserInfo(user)).toEqual({
      type: ActionType.UPDATE_USER_INFO,
      payload: user,
    });
  });
});


describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(mockInitialState);
  });


  it(`RESET_USER`, () => {
    const action = {
      type: ActionType.RESET_USER,
    };

    expect(reducer(mockInitialState, action)).toEqual(
        Object.assign({}, mockInitialState, {
          info: mockInitialState.info,
        })
    );
  });


  it(`UPDATE_USER_INFO`, () => {
    const action = {
      type: ActionType.UPDATE_USER_INFO,
      payload: user,
    };

    expect(reducer(mockInitialState, action)).toEqual(
        Object.assign({}, mockInitialState, {
          info: user,
        })
    );
  });
});
