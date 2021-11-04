Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.

export function swap(massive) {
  if (massive.length < 2) {
    return massive;
  }
  const tmp = massive[0];
  massive[0] = massive[massive.length - 1];
  massive[massive.length - 1] = tmp;
  return massive;
}
