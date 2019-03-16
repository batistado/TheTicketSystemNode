const fs = require('fs');
const path = require('path');

const loginData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/User.json'), 'utf8'));

module.exports = loginData;