const num_lengths = [
    6, 2, 5, 5, 4, 5, 6, 3, 7, 6,
];

const unique_lengths = [0, 0, 1, 1, 1, 0, 0, 1, 0];

const count_unique_nums = (data) => {
    let count = 0;
    data.forEach(entry => {
        let whatICareAbt = entry[1].trim().split(' ');
        whatICareAbt.forEach(val => {
            if (unique_lengths[val.length] == 1) {
                count ++;
            }
        })
    })
    return count;
}

module.exports = { count_unique_nums }
