const express = require('express')
const app = express()
const middelware = (req, res, next) => {
    console.log("hello middlewre")
    next() // User is log in or satifies need
}
// middelware()
app.get('/', (req, res) => {
    res.send('Hello world form the server')

})
app.get('/about', middelware, (req, res) => { //  middleware runs first then it move to the next task
    console.log('This is about')
    res.send('This is about')
})
app.get('/contact', (req, res) => {
    res.send('This is contact')
})
app.get('/', (req, res) => {
    res.send('Hello world form the server')
})

console.log('Subhash')

app.listen(3000, () => {
    console.log('server is running at port no 3000')
})