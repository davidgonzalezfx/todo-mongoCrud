const express = require('express');
const router = express.Router();

const model = require('../model/tasks.js')();

router.get('/', (req, res)=>{
	model.find({}, (err, tasks)=>{
		if(err) throw err;
		res.render('index', {
			title: 'To-Do App',
			tasks: tasks
		})
	})
})

router.post('/add', (req, res)=>{
	let body = req.body;
	body.estado = false
	model.create(body, (err, task)=>{
		if(err) throw err;
		res.redirect('/');
	})
})

router.get('/turn/:id', (req, res)=>{
	let id = req.params.id
	model.findById(id, (err, task)=>{
		if(err) throw err;
		task.estado = !task.estado
		task.save()
			.then(() => res.redirect('/'))
	})
})

router.get('/delete/:id', (req, res)=>{
	let id = req.params.id
	model.remove({_id: id}, (err, task)=>{
		if(err) throw err;
		res.redirect('/');
	})
})

module.exports = router;