import React from 'react';
import renderer from 'react-test-renderer';

import {reviews} from '../../../mocks/reviews';
import {TabReviews} from './tab-reviews';


const mock = {
  filmId: 1,
  loadReviews: () => void (0),
  reviews,
};

it(`TabReviews correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <TabReviews
        filmId={mock.filmId}
        loadReviews={mock.loadReviews}
        reviews={mock.reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
