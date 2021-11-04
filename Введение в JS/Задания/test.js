Проверьте с помощью утверждений (asserts) правильность работы функции factorial(), которая вычисляет факториал переданного числа. Факториал числа x — это произведение всех чисел от 1 до x. 

import assert from 'assert';
import factorial from './functions.js';

assert.equal(factorial(0), 1);

assert.equal(factorial(1), 1);

assert.equal(factorial(5), 120);
