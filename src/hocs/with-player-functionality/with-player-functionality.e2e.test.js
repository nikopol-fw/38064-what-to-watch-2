import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withPlayerFunctionality} from './with-player-functionality';


Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withPlayerFunctionality(MockComponent);

describe(`withPlayerFunctionality e2e`, () => {
  let wrapper;
  let videoRef;

  beforeEach(() => {
    videoRef = {
      play: jest.fn(),
      pause: jest.fn(),
      requestFullscreen: jest.fn(),
      duration: 10000,
      currentTime: 5000,
    };

    wrapper = shallow(<MockComponentWrapped/>);
    wrapper.instance().videoRef.current = videoRef;
  });

  it(`It should change the isPlaying flag correctly when call the onPlayBtnClick and the onPauseBtnClick methods`, () => {
    wrapper.instance().onPlayBtnClick();
    expect(wrapper.state().isPlaying).toEqual(true);

    wrapper.instance().onPauseBtnClick();
    expect(wrapper.state().isPlaying).toEqual(false);
  });

  it(`It should change timeLeft correctly when call the onMetadataLoaded method`, () => {
    wrapper.instance().onMetadataLoaded();
    expect(wrapper.state().timeLeft).toEqual(10000);
  });

  it(`It should change percentage and timeLeft correctly when call the onTimeUpdate method`, () => {
    wrapper.instance().onTimeUpdate();
    expect(wrapper.state().percentage).toEqual(videoRef.currentTime * 100 / videoRef.duration);
    expect(wrapper.state().timeLeft).toEqual(videoRef.duration - videoRef.currentTime);
  });
});
