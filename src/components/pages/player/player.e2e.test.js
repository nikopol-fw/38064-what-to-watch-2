import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {films} from '../../../mocks/films';
import {Player} from './player';


Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  film: films[0],
  isPlaying: true,
  percentage: 50,
  timingString: `00:13:32`,
};

describe(`Player e2e`, () => {
  let historyMock;
  let location;

  beforeEach(() => {
    historyMock = {
      push: jest.fn(),
      goBack: jest.fn()
    };
    location = {
      key: null,
    };
  });

  it(`If location key isn't null It should goBack in history when call the handleExitBtnClick method`, () => {
    const wrapper = shallow(
        <Player
          history={historyMock}
          location={location}
          film={mock.film}
          isPlaying={mock.isPlaying}
          percentage={mock.percentage}
          timingString={mock.timingString}
        />);

    wrapper.instance().handleExitBtnClick();
    expect(historyMock.push).toHaveBeenCalledTimes(1);
  });

  it(`If location key is null It should redirect to root when call the handleExitBtnClick method`, () => {
    location = {
      key: `1`,
    };

    const wrapper = shallow(
        <Player
          history={historyMock}
          location={location}
          film={mock.film}
          isPlaying={mock.isPlaying}
          percentage={mock.percentage}
          timingString={mock.timingString}
        />);

    wrapper.instance().handleExitBtnClick();
    expect(historyMock.goBack).toHaveBeenCalledTimes(1);
  });
});
