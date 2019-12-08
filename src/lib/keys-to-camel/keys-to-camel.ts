import {isObject} from '../is-object/is-object';
import {snakeToCamel} from '../snake-to-camel/snake-to-camel';


/**
 * Переводит kebab и snake-case свойства объекта любой структуры в camelCase формат
 * @param {{} | []} obj
 * @return {{}|*}
 */
export const keysToCamel = (obj) => {
  if (isObject(obj)) {
    const newObj = {};

    Object.keys(obj)
      .forEach((key) => {
        newObj[snakeToCamel(key)] = keysToCamel(obj[key]);
      });
    return newObj;

  } else if (Array.isArray(obj)) {
    return obj.map((item) => keysToCamel(item));
  }

  return obj;
};
