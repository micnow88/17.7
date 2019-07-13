var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.readdir('../17.7', 'utf-8', function(err, data){
	console.log(data);
	fs.writeFile('./ls-file.txt', data, function(err) {
		if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./ls-file.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
	});
});