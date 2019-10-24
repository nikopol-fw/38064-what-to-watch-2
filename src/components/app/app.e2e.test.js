import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './app';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockFilms = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
}, {
  title: `Bohemian Rhapsody`,
}, {
  title: `Macbeth`,
}, {
  title: `Aviator`,
}];

describe(`App e2e`, () => {
  it(`Title click is correct`, () => {
    const clickHandler = jest.fn();
    const app = shallow(<App
      films={mockFilms}
      onTitleClick={clickHandler}
    />);

    const titleElement = app.find(`.movie-card__title`);
    titleElement.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
