require('dotenv').config()
const mongoose = require('mongoose')

const port = process.env.DATABASE
// console.log(port)
const conn = mongoose.connect(port)
    .then(db =>{
        console.log("Database Connected")
        return db
    }).catch(err => {
        console.log("Connection Error")
})

module.exports = conn