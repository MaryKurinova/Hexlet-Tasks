Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов переданного массива. 

const calculateAverage = (arr) => {
  if (arr.length === 0) return null;

  let sum = 0;

  for (const item of arr) {
    sum += item;
  }

  return sum / arr.length;
};
export default calculateAverage;
