Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы на противоположный.

const invertCase = (str) => {
  let index = 0;
  let result = '';
  const lowerStr = str.toLowerCase();
  const upperStr = str.toUpperCase();
  for (; index < str.length; index += 1) {
    if (str[index] === lowerStr[index]) {
      result = `${result}${upperStr[index]}`;
    } else result = `${result}${lowerStr[index]}`;
  }
  return result;
};

export default invertCase;
