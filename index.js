const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({extended: true})) // Can read array or object convert to json

app.use('/', (req, res) => {
    return res.send('Server is running')
})

const PORT = process.env.PORT || 8888

const listener = app.listen(PORT, () => {
    console.log(`Listening on port ${listener.address().port}`)
})
