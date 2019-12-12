import * as React from 'react';


const INITIAL_COUNT = 8;
const COUNT_TO_INCREASE = 20;

interface State {
  activeGenre: string;
  count: number;
}

export const withFilters = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  class WithFilters extends React.PureComponent<T, State> {
    state = {
      activeGenre: `All genres`,
      count: INITIAL_COUNT,
    };

    constructor(props) {
      super(props);

      this.setActiveGenre = this.setActiveGenre.bind(this);
      this.showMore = this.showMore.bind(this);
    }

    setActiveGenre(genre: string) {
      this.setState({
        activeGenre: genre,
        count: INITIAL_COUNT,
      });
    }

    showMore() {
      this.setState((state) => ({
        count: state.count + COUNT_TO_INCREASE,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          activeGenre={this.state.activeGenre}
          count={this.state.count}
          setActiveGenre={this.setActiveGenre}
          showMore={this.showMore}
        />
      );
    }
  }

  return WithFilters;
};
