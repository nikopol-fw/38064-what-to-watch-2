import * as React from "react";


interface Props {
  onBtnClick: () => void;
}

export class ShowMoreBtn extends React.PureComponent<Props> {

  render() {
    const {onBtnClick} = this.props;

    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button"
          onClick={onBtnClick}>Show more</button>
      </div>
    );
  }
}
