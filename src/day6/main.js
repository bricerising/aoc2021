const part1 = require('./part1');
const path = require('path');
const util = require("../util");


const file_path = path.join(__dirname, 'part1_input.txt');
let data = util.read_datafile(file_path);
data = data[0].split(',').map((val) => Number(val));
console.log(`Part 1: ${part1.calculate_fish(data, 80)}`);
console.log(`Part 2: ${part1.calculate_fish(data, 256)}`);
