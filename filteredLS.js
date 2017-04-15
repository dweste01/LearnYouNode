var fs = require('fs');
var path = require('path');



var filepath = process.argv[2];
var ext = process.argv[3];

var files = fs.readdir(filepath, function(err, files) {
	files.forEach(function(f) {
		// if (path.extname(f))
		if(path.extname(f).slice(1)==ext) {
			console.log(f);
		}
	});
});