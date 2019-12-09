import * as React from 'react';
import {Link} from 'react-router-dom';

import {User} from "../../models/User";
import {PropsWithChildren} from "react";


interface Props {
  user: User;
}

const Layout: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const {user, children} = props;

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
          {user && user.id
            ? (
              <div className="user-block__avatar">
                <img src={`https://htmlacademy-react-2.appspot.com${user.avatar}`} alt={user.name} width="63" height="63"/>
              </div>
            )
            : <Link to="/login" className="user-block__link">Sign in</Link>
          }
        </div>
      </header>
    </section>


    <div className="page-content">
      {children}
    </div>
  </React.Fragment>;
};


export {Layout};
