const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const port = process.env.PORT || 8002;

const app = express()

app.set('view engine', 'ejs')
// app.use(express.static('public'))

app.get('/', (req,res) => {
    res.status(200).render('index')
})

app.use(serveStatic(path.join(__dirname, 'public')))
app.use(serveStatic(path.join(__dirname, 'node_modules/twilio-video/dist/')))
app.use(serveStatic(path.join(__dirname, 'node_modules/@twilio/video-processors/dist/build')))
app.listen(port, (req,res) => {
    console.log(`server listning to port ${port}`)
})