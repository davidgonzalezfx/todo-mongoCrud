const mongoose = require('mongoose');

let db;

module.exports = function Connection() {
	if(!db){
		mongoose.connect('mongodb://localhost/crud-example');
		db = mongoose.connection;
		return db;
	}
	else {
		return db;
	}
}