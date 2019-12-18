import * as React from 'react';


interface Props {
  onBtnClick: () => void;
}

export const ShowMoreBtn: React.FC<Props> = (props) => {
  const {onBtnClick} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={onBtnClick}>Show more</button>
    </div>
  );
};
