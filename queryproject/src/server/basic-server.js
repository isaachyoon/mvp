var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../client')));
// app.use(express.static(path.join(__dirname, '../client/public')));

//
app.get('/query', function(req, res) {
	console.log(req.body);
	res.sendFile(path.join(__dirname, '../client', 'index.html'));
})



app.listen(3000, function() {
	console.log('Server Connected!');
})


// app.get('/', function (req, res) {
// 	// app.use(express.static(path.join(__dirname, '../client/index.html')));

// 	res.sendFile(path.join(__dirname, '../client', 'index.html'));

// 	// res.render('../index')
// 	// res.send('Hello World');
// })

// //Is this the most efficient method for serving up files?
// app.get('/*.css', function (req, res) {
// 	res.sendFile(path.join(__dirname, '../client/app/style', 'styles.css'));
// })
// app.get('/public/bundle.js', function (req, res) {
// 	res.sendFile(path.join(__dirname, '../client/public', 'bundle.js'));
// })

// app.get('/app/title_image.png', function (req, res) {
// 	res.sendFile(path.join(__dirname, '../client/app/title_image.png'))
// })
