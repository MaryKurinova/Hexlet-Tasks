Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы внутри него в обратном порядке.

export const reverse = (coll) => {
  const lastIndex = coll.length - 1;
  const middleIndex = lastIndex / 2;

  for (let i = 0; i < middleIndex; i += 1) {
    const mirrorIndex = lastIndex - i;
    const temp = coll[i];
    coll[i] = coll[mirrorIndex];
    coll[mirrorIndex] = temp;
  }
};
