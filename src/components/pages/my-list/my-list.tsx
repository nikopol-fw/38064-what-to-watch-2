import * as React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {Film} from "../../../models/Film";
import {User} from "../../../models/User";
import {getFavorites} from "../../../reducer/data/selectors";
import {withActiveItem} from "../../../hocs/with-active-item/with-active-item";
import {FilmsList} from "../../films-list/films-list";
import {Operation} from "../../../reducer/data/data";


const FilmsListWrapped = withActiveItem(FilmsList);

interface Props {
  films: Film[];
  loadFavorites: () => Promise<any>;
  user: User;
}

export class MyList extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props);

    this.props.loadFavorites();
  }

  render() {
    const {films, user} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <Link to="/mylist">
                <img src={`https://htmlacademy-react-2.appspot.com${user.avatar}`} alt="User avatar" width="63" height="63"/>
              </Link>
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsListWrapped
            activeGenre={`All genre`}
            films={films}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => dispatch(Operation.loadFavorites()),
});


export default connect(mapStateToProps, mapDispatchToProps)(MyList);
