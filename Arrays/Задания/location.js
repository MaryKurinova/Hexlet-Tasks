/* На многих картах, например, google maps реализован поиск мест, находящихся рядом с выбранной точкой, например, с текущим расположением. В этом задании мы реализуем подобную задачу в очень упрощенном варианте.

location.js
Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и возвращает его. Параметры функции:

locations – массив мест на карте. Каждое место - это массив из двух элементов, где первый элемент это название места, второй – точка на карте (массив из двух чисел x и y).
point – текущая точка на карте. Массив из двух элементов-координат x и y. */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN (write your solution here)
export const getTheNearestLocation = (locations, currentPoint) => {
  if (!locations.length) {
    return null;
  }
  const [nearestlocation] = locations;
  let [nearestPlace, nearestPoints] = nearestlocation;
  let lowestDistance = getDistance(currentPoint, nearestPoints);

  for (const location of locations) {
    const [place, point] = location;
    const distance = getDistance(currentPoint, point);
    if (distance < lowestDistance) {
      lowestDistance = distance;
      nearestPlace = place;
      nearestPoints = point;
    }
  }
  return [nearestPlace, nearestPoints];
};
