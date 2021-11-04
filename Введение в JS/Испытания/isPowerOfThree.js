Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

export default (n) => {
  const findPower = (power) => {
    if (3 ** power > n) {
      return false;
    } if (3 ** power < n) {
      return findPower(power + 1);
    }
    return true;
  };
  return findPower(0);
};
