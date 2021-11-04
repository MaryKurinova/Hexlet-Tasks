Треугольник Паскаля — бесконечная таблица биномиальных коэффициентов, имеющая треугольную форму. В этом треугольнике на вершине и по бокам стоят единицы. 
Каждое число равно сумме двух расположенных над ним чисел. 
Строки треугольника симметричны относительно вертикальной оси.

Напишите функцию generate, которая возвращает указанную строку треугольника паскаля в виде массива. Экспортируйте функцию по умолчанию.

const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const generate = (num) => {
  let result = [];
  for (let i = 0; i <= num; i++) {
    let item = factorial(num) / (factorial(i) * factorial(num - i));
    result.push(item);
  }
  return result;
};

export default generate;
