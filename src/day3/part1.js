
const puzzle = (data) => {
    let gamma = ""
    let epsilon = ""
    for (let i=0; i < data[0].length; i++) {
        let most_common = most_common_for_index(data, i);
        gamma += most_common
        epsilon += (most_common? 0 : 1)
    }
    return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

const most_common_for_index = (data, index) => {
    let total = 0;
    data.forEach(num => {
        let val = Array.from(num)[index];
        total += Number(val);
    })
    return total > data.length/2? 1 : 0;
}

module.exports = { puzzle }
