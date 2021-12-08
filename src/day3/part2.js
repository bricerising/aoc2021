
const puzzle = (data) => {
    let oxygen_rating = data.slice();
    let co2_rating = data.slice();
    let i = 0;
    while(oxygen_rating.length > 1) {
        let most_common = most_common_for_index(oxygen_rating, i);
        oxygen_rating = oxygen_rating.filter(val => {
            return Array.from(val)[i] == most_common
        });
        i++;
    }
    i=0
    while(co2_rating.length > 1) {
        let most_common = most_common_for_index(co2_rating, i);
        co2_rating = co2_rating.filter(val => {
            return Array.from(val)[i] != most_common
        });
        i++
    }
    return parseInt(co2_rating[0], 2) * parseInt(oxygen_rating[0], 2)
}

const most_common_for_index = (data, index) => {
    let total = 0;
    data.forEach(num => {
        let val = Array.from(num)[index];
        total += Number(val);
    })
    return total >= data.length/2? 1 : 0;
}

module.exports = { puzzle }
