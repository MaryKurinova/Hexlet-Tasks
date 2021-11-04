Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).

const calculateSum = (coll) => {
  if (coll === []) {
    return 0;
  } let sum = 0;
  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] % 3 === 0) {
      sum += coll[i];
    }
  }
  return sum;
};
export default calculateSum;
