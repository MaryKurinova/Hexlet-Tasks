Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два массива и возвращающую количество общих уникальных значений в обоих массивах.

const getSameCount = (arr, arr2) => {
  const arrOne = _.uniq(arr); 
  const arrTwo = _.uniq(arr2); 
  let result = 0;

  for (const item of arrOne) {
    if (arrTwo.includes(item)) result += 1;
  }

  return result;
};

export default getSameCount;
