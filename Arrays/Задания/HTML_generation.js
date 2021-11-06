Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. 
При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

const buildDefinitionList = (arr) => {
  if (arr.length === 0) return '';

  const start = [];
  for (const def of arr) {
    start.push(`<dt>${def[0]}</dt>`);
    start.push(`<dd>${def[1]}</dd>`);
  }

  const result = start.join('');
  return `<dl>${result}</dl>`;
};

export default buildDefinitionList;
