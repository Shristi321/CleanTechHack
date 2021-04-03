const express = require('express')
const app = express()
var bodyParser = require('body-parser')
require('./firestore');
const port = 3000

var dashboardRouter = require('./routes/dashboard');
var eventsRouter = require('./routes/events');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use('/dashboard', dashboardRouter);
app.use('/', eventsRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})