
const calculate_fish = (data, days) => {
    let counts = make_counts_of_counts(data)
    for(let i = 0; i < days; i++) {
        counts = handle_day(counts);
    }
    return counts.reduce((cur, prev) => cur + prev)
}

const make_counts_of_counts = (data) => {
    const counts = [];
    for(let i = 0; i<=10; i++) {
        counts[i] = 0
    }
    for (const num of data) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts
}

const handle_day = (counts) => {
    counts[9] = counts[0]
    counts[7] += counts[0]
    for(let i = 1; i<=10; i++) {
        counts[i-1] = counts[i]
    }
    return counts
}

module.exports = { calculate_fish }
