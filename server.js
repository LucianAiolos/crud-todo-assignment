const express = require('express')
const router = require('./router/router')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('dotenv').config()


const server = express()

//views
server.set('views', './src/views')
server.set('view engine', 'ejs')
// body barser
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(express.static('public')) // for css ??
// router
server.use(router)

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

mongoose
  .connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(()=> {
    console.log("Connected to DB")
  })

// server.get("/", (req, res) => {
//   res.send("Hello World")
// })
//DON'T NEED THIS HERE router take care of this.

server.listen(PORT, async () => console.log("Server on ", PORT))