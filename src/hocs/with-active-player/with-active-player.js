import React, {PureComponent} from 'react';


const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.videoPlayDelay = 1000;
      this.delayTimer = null;

      this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
      this.onCardMouseLeaver = this.onCardMouseLeaver.bind(this);

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

    onCardMouseEnter(i) {
      this.delayTimer = setTimeout(() => {
        this.setActiveState(i);
      }, this.videoPlayDelay);
    }

    onCardMouseLeaver() {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
      this.resetState();
    }

    render() {
      return <Component
        {...this.props}
        activeCard = {this.state.activeCard}
        onCardMouseEnter={this.onCardMouseEnter}
        onCardMouseLeaver={this.onCardMouseLeaver}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};


export default withActivePlayer;
