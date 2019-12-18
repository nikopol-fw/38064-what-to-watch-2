import React from 'react';
import renderer from 'react-test-renderer';

import {VideoPlayer} from './video-player';
import {films} from '../../../mocks/films';


const mock = {
  isMuted: true,
  poster: films[0].previewImage,
  video: films[0].previewVideoLink,
};

it(`VideoPlayer correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <VideoPlayer
        poster={mock.poster}
        video={mock.video}
        isMuted={mock.isMuted}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
