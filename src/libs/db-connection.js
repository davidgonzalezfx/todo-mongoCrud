const mongoose = require('mongoose');

let db;

module.exports = function Connection() {
	if(!db){
		mongoose.connect('mongodb://davidgonzalezfx:mlab123@ds251948.mlab.com:51948/todoapp');
		db = mongoose.connection;
		return db;
	}
	else {
		return db;
	}
}