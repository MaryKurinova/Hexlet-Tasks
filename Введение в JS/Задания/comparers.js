Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.

Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

Если в первой строке больше заглавных символов, то возвращается 1.
Если во второй строке больше заглавных символов, то возвращается -1.
Иначе возвращается 0.

import { length, toUpperCase } from './strings.js';

const bigLettersCount = (str) => {
  let count = 0;
  for (let i = 0; i < length(str); i += 1) {
    if (toUpperCase(str[i]) === str[i]) {
      count += count + 1;
    }
  }
  return count;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  }
  if (firstCount < secondCount) {
    return -1;
  }

  return 0;
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);
