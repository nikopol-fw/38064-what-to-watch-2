import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Layout = (props) => {
  const {children} = props;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <Link to="/login" className="user-block__link">Sign in</Link>
        </div>
      </header>
    </section>


    <div className="page-content">
      {children}
    </div>
  </React.Fragment>;
};


Layout.propTypes = {
  children: PropTypes.element,
};


export {Layout};
