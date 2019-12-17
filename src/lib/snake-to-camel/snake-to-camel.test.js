import {snakeToCamel} from './snake-to-camel';


describe(`snakeToCamel work correctly`, () => {
  it(`The "deal_with_it" string should return the "dealWithIt" string`, () => {
    const mockString = `deal_with_it`;
    const str = snakeToCamel(mockString);
    expect(str).toEqual(`dealWithIt`);
  });

  it(`The "lets-code-some" string should return the "letsCodeSome" string`, () => {
    const mockString = `lets-code-some`;
    const str = snakeToCamel(mockString);
    expect(str).toEqual(`letsCodeSome`);
  });
});
