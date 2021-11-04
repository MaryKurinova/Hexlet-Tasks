Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    result = result + str[i];
    i -= i;
  }

  return result;
};

export default reverse;
