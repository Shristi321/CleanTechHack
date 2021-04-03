const express = require('express')
const app = express()
const port = 3000

var dashboardRouter = require('./routes/dashboard');

app.use('/dashboard', dashboardRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})