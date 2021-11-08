
/*Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.*/


export const getMax = (arr) => {
  if (!arr.length) return null;
  let [max, ...rest] = arr;
  for (const item of rest) {
    if (item > max) max = item;
  }
  return max;
};
