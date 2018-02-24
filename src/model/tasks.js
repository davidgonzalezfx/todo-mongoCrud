module.exports = function () {

	var db = require('../libs/db-connection.js')();
	var Schema = require('mongoose').Schema;
	var Task = Schema({
		titulo: String,
		descripcion: String,
		estado: Boolean
	})
	return db.model('task', Task);

}