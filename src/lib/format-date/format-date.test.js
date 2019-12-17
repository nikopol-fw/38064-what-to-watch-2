import {formatDate} from './format-date';


describe(`formatDate work correctly`, () => {
  it(`Date 2019-12-31 should correctly transform to string "2019-12-31" with "YYYY-MM-DD" format`, () => {
    const mockDate = new Date(`2019-12-31`);
    const str = formatDate(mockDate, `YYYY-MM-DD`);
    expect(str).toEqual(`2019-12-31`);
  });

  it(`Date 2019-12-31 should correctly transform to string "December 31, 2019" with "MMMM DD, YYYY" format`, () => {
    const mockDate = new Date(`2019-12-31`);
    const str = formatDate(mockDate, `MMMM DD, YYYY`);
    expect(str).toEqual(`December 31, 2019`);
  });
});
