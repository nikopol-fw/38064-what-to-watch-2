import React from 'react';
import renderer from 'react-test-renderer';

import {VideoPlayer} from './video-player';


const mock = {
  isPlaying: false,
  poster: `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};


it(`VideoPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<VideoPlayer
      poster={mock.poster}
      video={mock.preview}
      isPlaying={mock.isPlaying}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
