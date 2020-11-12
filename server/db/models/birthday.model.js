const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const birthdaySchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required:true
    },
    cohort_number: {
      type: String,
      required:true
    },
    month:{
        type: String,
        required:true
    },
    date: {
        type: String,
        required:true
    }
  }  
);

const Birthday = mongoose.model('Birthday', birthdaySchema);

moduler.exports = Birthday;