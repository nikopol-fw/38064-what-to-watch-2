import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {films} from '../../../mocks/films';
import {Player} from './player';


const mock = {
  film: films[0],
  isPlaying: false,
  percentage: 50,
  timingString: `00:07:47`,
  videoRef: React.createRef(),
  onFullScreenBtnClick: () => void (0),
  onPlayBtnClick: () => void (0),
  onPauseBtnClick: () => void (0),
  onMetadataLoaded: () => void (0),
  onTimeUpdate: () => void (0),
};

it(`Player correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <StaticRouter>
        <Player
          film={mock.film}
          isPlaying={mock.isPlaying}
          percentage={mock.percentage}
          timingString={mock.timingString}
          videoRef={mock.videoRef}
          onFullScreenBtnClick={mock.onFullScreenBtnClick}
          onPlayBtnClick={mock.onPlayBtnClick}
          onPauseBtnClick={mock.onPauseBtnClick}
          onMetadataLoaded={mock.onMetadataLoaded}
          onTimeUpdate={mock.onTimeUpdate}
        />
      </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
