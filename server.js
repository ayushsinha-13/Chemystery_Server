require('dotenv').config()
const express = require('express')
const app = express()

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const PORT = process.env.PORT || 5000


// Database
const conn = require('./database')

// Routes
const routes = require('./routes/route')
app.use(routes)

// app.listen(3000)
// Server Listen
conn.then(db => {
    if(!db) return process.exit(1);

    // listen to the http server
    app.listen(PORT, () => {
        console.log(`Server is running on port: http://localhost:${PORT}`)
    })

    app.on('error', err => console.log(`Failed To Connect with HTTP Server : ${err}`));
    // error in mondb connection
}).catch(error => {
    console.log(`Connection Failed...! ${error}`);
});
