Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.

const getSameParity = (arr) => {
  if (arr.length === 0) return [];
  const result = [];
  const r = Math.abs(arr[0] % 2);

  for (const item of arr) {
    if (Math.abs(item % 2) === r) result.push(item);
  }

  return result;
};

export default getSameParity;
