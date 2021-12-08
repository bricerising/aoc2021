const median = require('../util').median

const calculate_fuel = (data) => {
    const target = median(data)
    let total = 0
    data.forEach((val) => {
        total += Math.abs(target - val);
    })
    return total
}

module.exports = { calculate_fuel }
