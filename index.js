const express = require('express')
const app = express()
const PORT = 4000
const routes = require('./routes')


app.use('/', routes)



app.listen(PORT, () => {
    console.log(`backend app listening on port ${PORT}`)
})