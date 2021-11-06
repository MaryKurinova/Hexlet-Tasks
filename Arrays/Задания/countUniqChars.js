Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке. 
Например, в строке yy используется всего один символ — y. А в строке 111yya! — используется четыре символа: 1, y, a и !.


const countUniqChars = (str) => {
  if (str === '') return 0;

  let strUniq = '';
  for (const char of str) {
    if (!strUniq.includes(char)) {
      strUniq += char;
    }
  }
  return strUniq.length;
};

export default countUniqChars;
