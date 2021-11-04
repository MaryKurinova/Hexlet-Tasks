Создайте функцию getTriangleArea(), которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.

///ПЕРВАЯ ЧАСТЬ///
export const getTrianglePerimeter = (a, b, c) => a + b + c;
export const getTriangleArea = (h, b) => {
  return (1 / 2) * h * b;
};

///ВТОРАЯ ЧАСТЬ///

import square from './square.js';

import { getTriangleArea } from './myMathModule.js';

export default (n) => getTriangleArea(n, square(n) / 2);
