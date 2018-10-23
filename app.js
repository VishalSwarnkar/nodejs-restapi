const express = require('express');
let db = require('./db/db');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res, next)=>{
	//if(res.status != 200)
	//	next(errorHandler);
	res.status(200).send({
		success: 'true',
		description: 'Welcome to nodejs rest api'
	})
})

app.get('/api/v1/tools', (req, res, next)=>{
	res.status(200).send({
		success: 'true',
		description: 'retrive message successfully',
		source: db
	})
});

app.post('/api/v1/todos',(req, res)=>{
	
	if(!req.body.title) {
		return res.status(400).send({
		success: 'false',
		description: 'title is required'
		});
	  } else if(!req.body.description) {
		return res.status(400).send({
		  success: 'false',
		  description: 'description is required'
		});
	  }
	 let todo = {
	   id: db.length + 1,
	   title: req.body.title,
	   description: req.body.description
	 }
	 console.log(todo);
	 db.push(todo);
	 return res.status(201).send({
	   success: 'true',
	   description: 'todo added successfully',
	   todo
	 })
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, ()=>{
	console.log("Started Server with this port :: "+ PORT);
})