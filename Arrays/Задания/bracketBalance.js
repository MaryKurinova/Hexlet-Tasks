Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, 
и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Скобки должны закрываться в правильном порядке.


const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (str) => {
  const stack = [];
  for (const item of str) {
    if (openingSymbols.includes(item)) {
      stack.push(item);
    } else {
      const index = closingSymbols.indexOf(item);
      const pairItem = openingSymbols[index];
      if (stack.pop() !== pairItem) return false;
    }
  }
  return stack.length === 0;
};

export default isBracketStructureBalanced;
