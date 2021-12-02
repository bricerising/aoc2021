const test = require('ava');
const day2 = require('../src/day2/part1');

test('example', t => {
    const data = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2',];
    const solution = 150;
    t.is(day2.measure_area(data), solution);
});

test('part2', t => {
    const data = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2',];
    const solution = 900;
    t.is(day2.weird(data), solution);
});
