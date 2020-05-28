const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Detail = require('./model/model')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// Connecting to database
mongoose.connect('mongodb://localhost:27017/PhoneBook', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
	console.log('connected to database')
}).catch((error) => {
	console.log(error)
})


// Reading data from PhoneBook

app.get('/:id', (req, res) =>{
	Detail.findById(req.params.id, (err, user) =>{
		res.send(user)
	})
})

// Adding a User to PhoneBook
app.post('/', (req, res) => {
	name = req.body.name,
	email = req.body.email,
	phone = req.body.phone,
	dob = req.body.dob

	let newDetail = new Detail({
		name: name,
		email: email,
		phone: phone,
		dob: dob
	})

	newDetail.save().then((detail) => {
		res.send(detail)
	}).catch((err) => {
		console.log(error)
	})
})


// Updating the Record

app.post('/update/:id', (req, res) => {
	let detail = {}
	if (req.body.name) detail.name = req.body.name
	if (req.body.email) detail.email = req.body.email
	if (req.body.phone) detail.phone = req.body.phone
	if (req.body.dob) detail.dob = req.body.dob

	detail = { $set: detail }

	Detail.update({_id: req.params.id}, detail).then(() => {
		res.send(detail)
	}).catch((err) => {
		console.log(error)
	})
})


// Deleting the record from PhoneBook

app.delete('/delete/:id', (req, res) => {
	Detail.deleteOne({_id: req.params.id}).then(() => {
		res.send('Record deleted')
	}).catch((err) => {
		console.log(error)
	})
})

app.listen(3000, () => {
    console.log('sever listening on port:3000');
});