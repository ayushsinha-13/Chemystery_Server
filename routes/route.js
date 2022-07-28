const express = require('express')
const controller = require('../controllers/controller')
const app = express()

app.route('/login')
    .post(controller.login_user)

app.route('/question')
    .get(controller.get_question)
    .post(controller.create_question)     

app.route('/register')
    .post(controller.create_user)    

module.exports = app