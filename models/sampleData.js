const fs = require('fs');
const path = require('path');

const sampleData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/Sample Data.json'), 'utf8'));

module.exports = sampleData;