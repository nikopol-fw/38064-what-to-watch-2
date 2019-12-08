import * as React from 'react';


interface State {
  activeCard: number;
}

export const withActiveItem = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.setActiveState = this.setActiveState.bind(this);
      this.resetState = this.resetState.bind(this);

      this.state = {
        activeCard: -1,
      };
    }

    setActiveState(ind) {
      this.setState({
        activeCard: ind,
      });
    }

    resetState() {
      this.setState({
        activeCard: -1,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeCard = {this.state.activeCard}
        setActiveCard = {this.setActiveState}
        resetActiveCard = {this.resetState}
      />;
    }
  }


  return WithActiveItem;
};
