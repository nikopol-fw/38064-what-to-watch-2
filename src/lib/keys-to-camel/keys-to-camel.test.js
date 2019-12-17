import {keysToCamel} from './keys-to-camel';


describe(`keysToCamel work correctly`, () => {
  it(`The mock object with snake-case and kebab cases should correctly transform to object with camelCase keys`, () => {
    const mockObject = {
      'is_playing': true,
      'film_id': {
        'stars_of': 5,
        'cases': `string`,
      },
      'films': [{
        'film-id': 1,
      }, {
        'film-id': 2,
      }],
    };
    const transformedObject = keysToCamel(mockObject);
    expect(transformedObject).toEqual({
      isPlaying: true,
      filmId: {
        starsOf: 5,
        cases: `string`,
      },
      films: [{
        filmId: 1,
      }, {
        filmId: 2,
      }]
    });
  });
});
