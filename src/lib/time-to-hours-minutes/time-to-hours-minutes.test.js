import {timeToHoursMinutes} from './time-to-hours-minutes';


describe(`timeToHoursMinutes work correctly`, () => {
  it(`The value of 13 minutes should return the "13m" string`, () => {
    const mockTimeInMinutes = 13;
    const str = timeToHoursMinutes(mockTimeInMinutes);
    expect(str).toEqual(`13m`);
  });

  it(`The value of 65 minutes should return the "1h 5m" string`, () => {
    const mockTimeInMinutes = 65;
    const str = timeToHoursMinutes(mockTimeInMinutes);
    expect(str).toEqual(`1h 5m`);
  });

  it(`The value of 244 minutes should return the "4h 4m" string`, () => {
    const mockTimeInMinutes = 244;
    const str = timeToHoursMinutes(mockTimeInMinutes);
    expect(str).toEqual(`4h 4m`);
  });
});
