Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс, и возвращает новый массив, в котором к 
каждому элементу исходного массива добавляется переданный префикс. Функция предназначена для работы со строковыми элементами. После префикса автоматически добавляется пробел.

export default (coll, prefix) => {
  const result = [];

  for (let i = 0; i < coll.length; i += 1) {
    result[i] = `${prefix} ${coll[i]}`;
  }

  return result;
};
