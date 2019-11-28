import React, {PureComponent} from 'react';


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
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


  WithActiveItem.propTypes = {};


  return WithActiveItem;
};


export default withActiveItem;
