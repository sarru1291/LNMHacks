const path = require('path');
const fs = require('fs');
const solc = require('solc');

const pollingPath = path.resolve(__dirname, 'contracts', 'Polling.sol');
// console.log(inboxPath);
const source = fs.readFileSync(pollingPath, 'utf-8');
// console.log(source);
console.log(solc.compile(source, 1).contracts[':Polling']);
module.exports = solc.compile(source, 1).contracts[':Lottery'];