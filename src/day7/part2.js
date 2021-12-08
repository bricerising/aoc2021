const util = require('../util')
const binomial_coefficient = require('../util').binomial_coefficient

const calculate_fuel = (data) => {
    const average = data.reduce((cur, prev) => cur + prev)/data.length
    const target = util.find_closest(data, average);
    let total = 0
    data.forEach((val) => {
        total += binomial_coefficient(Math.abs(target - val));
    })
    return total
}

module.exports = { calculate_fuel }
