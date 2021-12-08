const test = require('ava');
const day7 = require('../src/day7/part1');

test('example', t => {
    const data = [16,1,2,0,4,2,7,1,2,14];
    const solution = 37;
    t.is(day7.calculate_fuel(data), solution);
});

