Реализуйте функцию square(), которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел

const square = (n1) => (n1 ** 2);

const sumOfSquares = (n1, n2) => (square(n1) + square(n2));

const squareSumOfSquares = (n1, n2) => (square(sumOfSquares(n1, n2)));

export {
  square,
  sumOfSquares,
  squareSumOfSquares,
};
