const fs = require('fs')

const read_datafile = (file_path) => {
    let data = fs.readFileSync(file_path);
    data = data.toString();
    return data.split("\n");
}

module.exports = { read_datafile }
