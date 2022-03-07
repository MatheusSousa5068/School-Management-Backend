// Express Router configuration
const express = require('express')
const routes = express.Router()
routes.use(express.json())


// Imports
const {
    dataForm
} = require('./controllers/student/dataForm')


// Multer Configuration
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/')
    },
    filename: function (req, file, callback) {
        callback(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})
const upload = multer({
    storage: storage
})




// Routes
routes.get('/', (req, res) => {
    res.send('hello world')
})

routes.post('/data', upload.fields([{
    name: 'comprovante',
    maxCount: 1
}, {
    name: 'certificado',
    maxCount: 1
},
{
    name: 'historico',
    maxCount: 1
}]), dataForm)



// Exporting the file
module.exports = routes