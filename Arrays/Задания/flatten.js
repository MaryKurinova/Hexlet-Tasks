/*Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.*/

export const flatten = (arr) => {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result.push(item);
    }
  }
  return result;
};
