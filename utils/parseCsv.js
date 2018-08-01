// Parse CSV sheet
const fs = require('fs');
const path = require('path');

/**
 * Wrapper functions that returns a Promise for ease of managing async code.
 */
const getLevelObjWrapper = () => {
    return new Promise((resolve, reject) => {
        resolve(getLevelObj());
    });
};

/**
 * Reads levelsheet.csv and returns a string to be parsed in index.js
 */
const getLevelObj = () => { 
    fs.readFileSync(path.join(__dirname, 'levelsheet.csv'), (err, data) => {
        if (err) throw err;
        const csv_string = data.toString();
        csv.parse(csv_string, (err, data) => {
            const levelObj = {};
            data.forEach((element) => {
                levelObj[element[0]] = element[1];
            });
            return levelObj;
        });
    });
};

module.exports = {
    getLevelObjWrapper
};

