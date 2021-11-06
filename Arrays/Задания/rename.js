//Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. 
//Аргументы:

//*Текст
//*Набор стоп слов
//*Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

const makeCensored = (str, censoredWords) => {
  const rename = ' ';
  const words = str.split(rename);
  const censoredText = [];

  for (const word of words) {
    (censoredWords.includes(word)) ? censoredText.push('$#%!') : censoredText.push(word);
  }
  return censoredText.join(rename);
};

export default makeCensored;
