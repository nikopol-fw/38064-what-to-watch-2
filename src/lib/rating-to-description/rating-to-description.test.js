import {ratingToDescription} from './rating-to-description';


describe(`ratingToDescription work correctly`, () => {
  it(`The rating 2 should return the "bad" string`, () => {
    const mockRating = 2;
    const str = ratingToDescription(mockRating);
    expect(str).toEqual(`bad`);
  });

  it(`The rating 3 should return the "normal" string`, () => {
    const mockRating = 3;
    const str = ratingToDescription(mockRating);
    expect(str).toEqual(`normal`);
  });

  it(`The rating 5 should return the "good" string`, () => {
    const mockRating = 5;
    const str = ratingToDescription(mockRating);
    expect(str).toEqual(`good`);
  });

  it(`The rating 8 should return the "very good" string`, () => {
    const mockRating = 8;
    const str = ratingToDescription(mockRating);
    expect(str).toEqual(`very good`);
  });

  it(`The rating 10 should return the "awesome" string`, () => {
    const mockRating = 10;
    const str = ratingToDescription(mockRating);
    expect(str).toEqual(`awesome`);
  });
});
