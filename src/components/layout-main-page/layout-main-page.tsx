import * as React from 'react';
import {Link} from 'react-router-dom';

import {User} from "../../models/User";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {Film} from "../../models/Film";
import {getPromo} from "../../reducer/data/selectors";


interface Props {
  loadPromo: () => Promise<any>;
  promo: Film;
  user: User;
}

export class LayoutMainPage extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props);

    props.loadPromo();
  }

  render() {
    const {promo, user, children} = this.props;

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src={promo ? promo.backgroundImage : null} alt={promo ? promo.name : null}/>
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
                    <Link to="/mylist">
                      <img src={`https://htmlacademy-react-2.appspot.com${user.avatar}`} alt={user.name} width="63" height="63"/>
                    </Link>
                  </div>
                )
                : <Link to="/login" className="user-block__link">Sign in</Link>
              }
            </div>
          </header>


          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={promo ? promo.posterImage : null} alt={promo ? promo.name : null} width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{promo ? promo.name : null}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{promo ? promo.genre : null}</span>
                  <span className="movie-card__year">{promo ? promo.released : null}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>

                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>


        <div className="page-content">
          {children}

          <footer className="page-footer">
            <div className="logo">
              <Link to="/" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  promo: getPromo(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadPromo: () => dispatch(Operation.loadPromo()),
});


export default connect(mapStateToProps, mapDispatchToProps)(LayoutMainPage);
