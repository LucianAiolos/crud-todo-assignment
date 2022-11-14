const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('dotenv').config()


const server = express()

//views
server.set('views', './src/views')
server.set('views engine', 'ejs')
// body barser
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(express.static('public')) // for css ??

const PORT = process.env.PORT

console.log(PORT)