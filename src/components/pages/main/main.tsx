import * as React from 'react';
import {connect} from 'react-redux';

import {Film} from "../../../models/Film";
import {getFilms, getGenres} from '../../../reducer/data/selectors';
import Catalog from "../../shared/catalog/catalog";
import {withFilters} from "../../../hocs/with-filters/with-filters";


const CatalogWrapped = withFilters(Catalog);

interface Props {
  films: Film[];
  genres: string[];
}

export class MainPage extends React.PureComponent<Props> {

  static readonly defaultProps = {
    films: [],
    genres: [],
  };

  constructor(props: Props) {
    super(props);


  }

  render() {
    const {films, genres} = this.props;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogWrapped
          films={films}
          genres={genres}
        />
      </section>
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFilms(state),
  genres: getGenres(state),
});


export default connect(mapStateToProps)(MainPage);
