const mongoose = require('mongoose')

const Schema = mongoose.Schema

const user_model = new Schema({
    uid: String,
    fname: String,
    lname: String,
    email: String,
    state: String,
    password: String,
    class_n: String,
    age: Number
})

const User = mongoose.model('user', user_model)

module.exports = User