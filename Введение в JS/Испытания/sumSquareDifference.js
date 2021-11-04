Напишите функцию sumSquareDifference(), которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

const sumSquareDifference = (n) => {
  let sum1 = 0;
  for (let i = 1; i <= n; i += 1) {
    sum1 += i ** 2;
  }
  let sum2 = 0;
  for (let i = 1; i <= n; i += 1) {
    sum2 += i;
  }
  return sum2 ** 2 - sum1;
};

export default sumSquareDifference;
