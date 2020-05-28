const mongoose = require('mongoose')

//Schema for Phonebook
const detailSchema = mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    email: {
     type: String,
     required: true
    },
    phone: {
     type: Number,
     required: true
    },
    dob: {
     type: String,
     required: true
    }
   })
  
   const Detail = mongoose.model('Detail', detailSchema)
   module.exports = Detail;