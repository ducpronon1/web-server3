const express = require("express")

const request = require('request')

const app = express()

app.get('', (req, res) => {
    res.send('ducpronono1')
})


app.listen(1080, () => {
    console.log('successful')
})