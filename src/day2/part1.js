const measure_area = (data) => {
    const processed_data = process_data(data);

    let horizontal = sum_move(processed_data, 'forward');
    let up = sum_move(processed_data, 'up');
    let down = sum_move(processed_data, 'down');

    let depth = down + up;
    return horizontal * depth;
}

const weird = (data) => {
    const processed_data = process_data(data);
    let horizontal = 0, depth = 0, aim = 0;

    processed_data.forEach((val) => {
        if (val[0] == 'forward') {
            horizontal += val[1];
            depth += aim * val[1];
        } else {
            aim += val[1];
        }
    });

    return horizontal * depth;
}

const process_data = (data) => {
    return data.map((val) => {
        let e = val.split(' ');
        e[1] = Number(e[1]);
        if (e[0] === 'up') {
            e[1] = -e[1];
        }
        return e;
    });
}

const sum_move = (data, move) => {
    return data.filter(val => {
        return val[0] === move;
    }).map(val => {
        return val[1];
    }).reduce((prev, cur) => {
        return prev + cur;
    });
}

module.exports = { measure_area, weird }
