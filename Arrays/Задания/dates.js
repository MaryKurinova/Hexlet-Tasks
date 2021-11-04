Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

'long' (по умолчанию) – массив содержит значения saturday и sunday
'short' – массив содержит значения sat и sun

export const getWeekends = (str) => {
  const longs = ['saturday', 'sunday'];
  const shorts = ['sat', 'sun'];
  if (str === 'long') {
    return longs;
  } if (str === 'short') {
    return shorts;
  } return ['saturday', 'sunday'];
};
