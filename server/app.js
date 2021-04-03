const express = require('express')
const app = express()
const port = 3000

var dashboardRouter = require('./routes/dashboard');
var eventsRouter = require('./routes/events');

app.use('/dashboard', dashboardRouter);
app.use('/', eventsRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})