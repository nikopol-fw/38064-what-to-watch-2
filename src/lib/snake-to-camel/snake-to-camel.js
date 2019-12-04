/**
 * @param {string} str
 * @return {string} Возвращает новую строку переведенную из <kebab | snake> case в camelCase
 */
export const snakeToCamel = (str) => {
  return str.replace(
      /([-_][a-z])/gi,
      ($1) => $1
      .toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``));
};
