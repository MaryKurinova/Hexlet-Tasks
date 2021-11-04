Вес Хэмминга — это количество единиц в двоичном представлении числа.
Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.


const hammingWeight = (num) => {
  const binary = num.toString(2);
  const one = binary.split("").filter((item) => item === "1");
  return one.length;
};

export default hammingWeight;
