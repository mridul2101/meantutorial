var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
	db: 'mongodb://localhost/meandb',
	rootPath: rootPath,
	port: process.env.PORT || 3030
  },
  production: {
	db: 'mongodb://mrdlmndr:2008eec02@ds041671.mongolab.com:41671/meandb',
	rootPath: rootPath,
	port: process.env.PORT || 80
  }
} 

