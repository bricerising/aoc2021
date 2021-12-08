class Number {
    constructor(letters) {
        this.size = letters.length;
        this.letters = Array.from(letters).sort().join();
    }

    contains(number) {
        return this.letters.indexOf(number.letters);
    }
}

const unique_lengths = [0, 0, 1, 7, 4, 0, 0, 8, 0];

const count_unique_nums = (data) => {
    let count = 0;
    let numbers = []
    data.forEach(entry => {
        let whatICareAbt = entry[0].trim().split(' ');
        whatICareAbt.forEach(val => {
            let number = new Number(val)
            if (unique_lengths[number.size] > 0 && unique_lengths[number.size] != 8) {
                number.num = unique_lengths[number.size]
                numbers.push(number)
            }
        })

    })
    console.log(numbers)
    return count;
}

module.exports = { count_unique_nums }
