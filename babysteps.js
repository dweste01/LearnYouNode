
var args = process.argv.slice(2);
var sum = args.reduce(function(accum, val) {
	return parseInt(accum) + parseInt(val);
}, 0);
console.log(sum);