const bcd = require('@mdn/browser-compat-data');
const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, 'bcd-browsers.json'), JSON.stringify(bcd.browsers));
