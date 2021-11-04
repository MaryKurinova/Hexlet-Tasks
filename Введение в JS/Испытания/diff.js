Напишите функцию diff(), которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними.

const diff = (a, b) => {
  let result1 = Math.abs(a - b);
  let result2 = 360 - result1;
  return (result1 >= result2) ? result2 : result1;
}

export default diff;
