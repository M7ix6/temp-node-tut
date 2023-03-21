const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const secound = readFileSync('./content/Secound.txt','utf8');

writeFileSync('./content/result-sync.txt', `Here is the resault : ${first} , ${secound} , ${flag : 'a'}`)