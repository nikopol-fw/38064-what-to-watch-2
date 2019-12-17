import {isObject} from './is-object';


describe(`isObject work correctly`, () => {
  it(`The {} should be an object`, () => {
    const mockObject = {};
    const is = isObject(mockObject);
    expect(is).toEqual(true);
  });

  it(`The {key: 1} should be an object`, () => {
    const mockObject = {key: 1};
    const is = isObject(mockObject);
    expect(is).toEqual(true);
  });

  it(`The undefined should not be an object`, () => {
    const mockObject = undefined;
    const is = isObject(mockObject);
    expect(is).toEqual(false);
  });

  it(`The null should not be an object`, () => {
    const mockObject = null;
    const is = isObject(mockObject);
    expect(is).toEqual(false);
  });

  it(`The number 0 should not be an object`, () => {
    const mockObject = 0;
    const is = isObject(mockObject);
    expect(is).toEqual(false);
  });

  it(`The array [1, 2, 3] should not be an object`, () => {
    const mockObject = [1, 2, 3];
    const is = isObject(mockObject);
    expect(is).toEqual(false);
  });
});
