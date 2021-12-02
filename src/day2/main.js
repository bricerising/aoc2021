const part1 = require('./part1');
const path = require('path');
const util = require("../util");


const file_path = path.join(__dirname, 'part1_input.txt');
const data = util.read_datafile(file_path);
console.log(`Part 1: ${part1.measure_area(data)}`);
console.log(`Part 2: ${part1.weird(data)}`);
