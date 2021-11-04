const isPerfect = (n) => {
  if (n < 6) {
    return false;
  }
  let sumOfDivisors = 1;
  let divisor = 2;
  const middle = n / 2;
  while (divisor <= middle) {
    if ((n % divisor) === 0) {
      sumOfDivisors += divisor;
    }
    divisor += 1;
  }
  if (n === sumOfDivisors) {
    return true;
  }
  return false;
};
export default isPerfect;
