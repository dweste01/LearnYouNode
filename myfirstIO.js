var file = process.argv[2];
var fs = require('fs');

var buff = fs.readFileSync(file).toString();
var newlines = buff.split('\n');
// console.log(buff);
console.log(newlines.length-1);