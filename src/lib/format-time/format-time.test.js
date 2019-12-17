import {formatTime} from './format-time';


describe(`formatTime work correctly`, () => {
  it(`The value of 199 seconds should correctly transform to string "00:03:19" with "HH:mm:ss" format`, () => {
    const mockSeconds = 199;
    const str = formatTime(mockSeconds, `seconds`, `HH:mm:ss`);
    expect(str).toEqual(`00:03:19`);
  });

  it(`The value of 5469 seconds should correctly transform to string "01:31:09" with "HH:mm:ss" format`, () => {
    const mockSeconds = 5469;
    const str = formatTime(mockSeconds, `seconds`, `HH:mm:ss`);
    expect(str).toEqual(`01:31:09`);
  });
});
