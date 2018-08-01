// Parse CSV sheet
const fs = require('fs');
const path = require('path');

const getLevelObjWrapper = () => {
    return new Promise((resolve, reject) => {
        resolve(getLevelObj());
    });
};

const getLevelObj = () => fs.readFileSync(path.join(__dirname, 'levelsheet.csv'), (err, data) => {
    if (err) throw err;
});

module.exports = {
    getLevelObjWrapper
};

