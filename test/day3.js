const test = require('ava');
const part1 = require('../src/day3/part1');
const part2 = require('../src/day3/part2');

test('example', t => {
    const data = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010']
    const solution = 198;
    t.is(part1.puzzle(data), solution);
});

test('part2', t => {
    const data = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010']
    const solution = 230;
    t.is(part2.puzzle(data), solution);
});
