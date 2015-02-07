var express = require('express'),
	stylus = require('stylus'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}


app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

if(env === 'development')
	mongoose.connect('mongodb://localhost/meandb');
else
	mongoose.connect('mongodb://mrdlmndr:2008eec02@ds041671.mongolab.com:41671/meandb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('meandb opened');
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage; 
Message.findOne().exec(function(err, messageDoc) {
  	mongoMessage = messageDoc.message;
	console.log(mongoMessage);
});
//});

app.get('/partials/:partialPath', function(req, res) {
	res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
	res.render('index',{
		mongoMessage: mongoMessage
	});
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '....');


