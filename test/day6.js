const test = require('ava');
const day6 = require('../src/day6/part1');

test('example', t => {
    const data = [3,4,3,1,2];
    const solution = 5934;
    const days = 80;
    t.is(day6.calculate_fish(data, days), solution);
});
