import {formatRating} from './format-rating';


describe(`formatRating work correctly`, () => {
  it(`Number 9.86 should correctly transform to string "9,9"`, () => {
    const mockNumber = 9.86;
    const str = formatRating(mockNumber);
    expect(str).toEqual(`9,9`);
  });

  it(`Number 9.85 should correctly transform to string "9,8"`, () => {
    const mockNumber = 9.85;
    const str = formatRating(mockNumber);
    expect(str).toEqual(`9,8`);
  });
});
