const part1 = require('./part1');
//const part2 = require('./part2');
const path = require('path');
const util = require("../util");

const file_path = path.join(__dirname, 'part1_input.txt');
let data = util.read_datafile(file_path);
data = data.map((val) => {
    let vals = val.split('|')
    return vals.map(a => a.trim())
})
console.log(`Part 1: ${part1.count_unique_nums(data)}`);
