const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
var bodyParser = require('body-parser')
require('./firestore');
const port = 3001

var dashboardRouter = require('./routes/dashboard');
var eventsRouter = require('./routes/events');
var usersRouter = require('./routes/user');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());


app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
  
    res.sendStatus(200);
  
});



app.use('/dashboard', dashboardRouter);
app.use('/', eventsRouter);
app.use('/', usersRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})

