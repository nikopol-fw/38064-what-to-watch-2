import * as React from 'react';


interface State {
  activeItem: number;
}

export const withActiveItem = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  class WithActiveItem extends React.PureComponent<T, State> {

    state = {
      activeItem: -1,
    };

    static readonly displayName = `WithActiveItem(${Component.displayName || Component.name})`;

    constructor(props) {
      super(props);

      this.setActiveItem = this.setActiveItem.bind(this);
      this.resetState = this.resetState.bind(this);
    }

    setActiveItem(ind) {
      this.setState({
        activeItem: ind,
      });
    }

    resetState() {
      this.setState({
        activeItem: -1,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeItem = {this.state.activeItem}
        setActiveItem = {this.setActiveItem}
        resetActiveItem = {this.resetState}
      />;
    }
  }

  return WithActiveItem;
};
