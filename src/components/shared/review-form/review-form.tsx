import * as React from 'react';


interface Props {
  isDisabled: boolean;
  isSubmitDisabled: boolean;
  onFormChange: () => void;
  onFormSubmit: () => void;
}

export const ReviewForm: React.FC<Props> = (props) => {
  const {isDisabled, isSubmitDisabled, onFormSubmit, onFormChange} = props;

  return (
    <form action="#" className="add-review__form" onSubmit={onFormSubmit} onChange={onFormChange}>
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" disabled={isDisabled} required/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" disabled={isDisabled}/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" disabled={isDisabled} defaultChecked/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" disabled={isDisabled}/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" disabled={isDisabled}/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" required
          minLength={50} maxLength={400}
          disabled={isDisabled}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitDisabled || isDisabled}>Post</button>
        </div>

      </div>
    </form>
  );
};

