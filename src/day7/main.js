const part1 = require('./part1');
const part2 = require('./part2');
const path = require('path');
const util = require("../util");

const file_path = path.join(__dirname, 'part1_input.txt');
let data = util.read_datafile(file_path);
data = data[0].split(',').map((val) => Number(val));
console.log(`Part 1: ${part1.calculate_fuel(data)}`);
console.log(`Part 1: ${part2.calculate_fuel(data)}`);
