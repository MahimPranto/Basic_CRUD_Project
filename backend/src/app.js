// dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const bodyPareser = require('body-parser')
const hpp = require('hpp')
const rateLimit = require('express-rate-limit')
const mongoSanitizer = require('express-mongo-sanitize')
const Path = require('path')
const router = require('./router.js')
const dotenv = require('dotenv')
dotenv.config({path : './.env'})

const app = express()

//security impelementation
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(mongoSanitizer())

const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

app.use(bodyPareser.json())


//router
app.use('/api/v1', router)


// 404 found
app.use('*', (req, res) => {
    res.status(404).json({success : false, message : 'page not found'})
})


//error handler
app.use((err, req, res, next) => {
        res.status(400).json({success : false, message : err.message})
})

//database connection
mongoose.connect(process.env.DB_URL, {user : process.env.DB_USER, pass : process.env.DB_PASS})
.then(() => console.log('database connected'))
.catch(e => console.log('database connection faild', e))




module.exports = app