const num_lengths = [
    6, 2, 5, 5, 4, 5, 6, 3, 7, 6,
];

const expected_coordinates = [ //top -> down, left -> right
    [1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1]
];

const all_lengths = expected_coordinates.map(entry => {
    let counter = 0
    entry.forEach(i => {
        if (i === 1) {
            counter ++;
        }
    })
    return counter;
})

const unique_lengths = [0, 0, 1, 7, 4, 0, 0, 8, 0];

const figure_out_thing = (num, letters) => {
    letter.fore
}

const count_unique_nums = (data) => {
    let count = 0;
    data.forEach(entry => {
        let actual_coordinates = expected_coordinates.slice();
        let whatICareAbt = entry[0].trim().split(' ');
        whatICareAbt.forEach(val => {
            if (unique_lengths[val.length] > 0) {
                let num = unique_lengths[val.length]
                actual_coordinates[num] =
            }
        })
    })
    return count;
}

module.exports = { count_unique_nums }
