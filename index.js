tick = [
  { from: 'SPb', to: 'Vladivostok'},
  { from: 'London', to: 'Moscow' },
  { from: 'NY', to: 'London' },
  { from: 'Moscow', to: 'SPb' }
];

//getRoute(tick);
// => [
//     { from: 'NY', to: 'London' },
//     { from: 'London', to: 'Moscow' },
//     { from: 'Moscow', to: 'SPb' },
//     { from: 'SPb', to: 'Vladivostok'}
// ] 

/*
У нас есть набор билетов вида:

[
  { from: 'London', to: 'Moscow' },
  { from: 'NY', to: 'London' },
  { from: 'Moscow', to: 'SPb' },
  ...
]

Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет.

Нужно написать программу, которая возвращает эти же объекты билетов 
в порядке следования по маршруту.
*/

function getRoute(tickets) {
  // your code here
  let result = [];
  let firstCity = [];
  let first;
  let lastCity = [];
  let last;

  tickets.forEach(elem => {
    firstCity.push(elem['from']);
    lastCity.push(elem['to']);
  })

  // поиск последнего города
  last = [].concat(lastCity);
  firstCity.forEach(elem => {
    last = last.filter(item => item !== elem)
  })
  last = last.join('');

  // поиск первого города
  first = [].concat(firstCity);
  lastCity.forEach(elem => {
    first = first.filter(item => item !== elem)
  })
  first = first.join('');

  let current = first;

  for (let i = 0; i < tickets.length; i++) {
    // поиск следующего билета
    tickets.forEach(elem => {
      if (elem['from'] === current) {
        result.push(elem);
        current = elem['to'];
      }
    })
  }

  console.log('first', first);
  console.log('last', last);
  console.log('current', current);

  return result;
}

console.log(getRoute(tick));
