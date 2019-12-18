import MockAdapter from 'axios-mock-adapter';

import {user} from '../../mocks/user';
import {ActionCreator, ActionType, Operation, reducer} from './user';
import {createAPI} from '../../api';


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


describe(`API works correctly`, () => {
  it(`authorize`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loader = Operation.authorize();

    apiMock
      .onPost(`/login`)
      .reply(200, {
        'avatar_url': `url`,
        'email': `email`,
        'id': 1,
        'name': `Tesla`,
      });

    return loader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_USER_INFO,
          payload: {
            avatar: `url`,
            email: `email`,
            id: 1,
            name: `Tesla`,
          },
        });
      });
  });
});
