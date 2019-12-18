import * as React from 'react';
import {Link} from 'react-router-dom';


interface Props {
  avatar: string;
  isAuth: boolean;
  name: string;
}

export const Header: React.FC<Props> = (props) => {
  const {avatar, isAuth, name} = props;

  return (
    <header className="page-header">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {props.children}

      <div className="user-block">
        {isAuth ? (
          <div className="user-block__avatar">
            <Link to="/mylist">
              <img src={`https://htmlacademy-react-2.appspot.com${avatar}`} alt={name} width="63" height="63"/>
            </Link>
          </div>
        ) :
          <Link to="/login" className="user-block__link">Sign in</Link>
        }
      </div>
    </header>
  );
};
