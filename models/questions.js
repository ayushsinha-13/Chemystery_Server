const mongoose = require('mongoose')

const Schema = mongoose.Schema

const question_model = new Schema({
    uid: String,
    question: String,
    option_1: String,
    option_2: String,
    option_3: String,
    option_4: String,
    answer: String,
})

const Question = mongoose.model('question', question_model)

module.exports = Question