import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app';

const mockFilms = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
}, {
  title: `Bohemian Rhapsody`,
}, {
  title: `Macbeth`,
}, {
  title: `Aviator`,
}];

const mockHandleTitleClick = () => {
  // eslint-disable-next-line no-console
  console.log(`clicked!`);
};

const init = () => {
  ReactDOM.render(
      <App
        films={mockFilms}
        onTitleClick={mockHandleTitleClick}
      />,
      document.getElementById(`root`)
  );
};

init();
