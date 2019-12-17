/**
 * Проверяет является ли значение объектом Object
 * @param {*} value
 * @return {boolean}
 */
export const isObject = (value) => {
  return (value !== null) && typeof value === `object` && value.constructor === Object;
};
