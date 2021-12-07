
const calculate_fuel = (data) => {
    return data.map((val, index) => {
        if (index+1 < data.length) {
            return Math.abs(val - data[index+1]);
        }
        return 0;
    }).reduce((prev, cur) => {
        console.log(prev)
        return prev + cur;
    });
}

module.exports = { calculate_fuel }
