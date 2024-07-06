const mongoose = require("mongoose")
const express = require('express')
const dotenv = require("dotenv")
const app = express()
// const middelware = (req, res, next) => {
//     console.log("hello middlewre")
//     next() // User is log in or satifies need
// }
dotenv.config({ path: './config.env' });
require('./db/conn'); // it will import the file and use
// const User = require('./model/userSchema')

app.use(express.json()); // Get the data in form of json
// Link router file for backend which is provided by the express
app.use(require('./router/auth'));



const PORT = process.env.PORT;
// middelware()
// app.get('/', (req, res) => { // get means read
//     res.send('Hello world form the server app.js')

// })
// app.get('/about', middelware, (req, res) => { //  middleware runs first then it move to the next task
//     console.log('This is about')
//     res.send('This is about')
// })
// app.get('/contact', (req, res) => {
//     res.cookie("Test", "Subhash")
//     res.send('This is contact')
// })
app.get('/', (req, res) => {
    res.send('Hello world form the server')
})

// console.log('Subhash')
app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`)
})
