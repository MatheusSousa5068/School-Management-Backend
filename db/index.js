const {
    Client
} = require('pg')

require('dotenv').config()

const client = new Client({
    host: process.env.host,
    user: process.env.user ,
    port: process.env.port,
    password: process.env.password,
    database: process.env.database
})

module.exports = { client }