
const calculate_fish = (data, days) => {
    for(let i = 0; i < days; i++) {
        data = handle_day(data);
    }
    return data.length;
}

const handle_day = (data) => {
    data.filter(val => val == 0 ).forEach(zero => {
        data.push(9)
    });
    data = data.map(val => {
        if (val == 0) {
            return 6;
        }
        return val - 1;
    })
    return data;
}

module.exports = { calculate_fish }
