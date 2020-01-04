const path = require("path")
const express = require("express")
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

const htmlpath1 = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../template/views')
const partialPath = path.join(__dirname,'../template/partials')


app.set('views', viewPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)

app.use(express.static(htmlpath1))

app.get('', (req, res) => {
    res.render('index',{
        name: 'Home Page'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Help Section'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        name: 'About Section'
    })
})
app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send('Error:please provide an address')
    }
    geocode(req.query.address, (error, { latitude, longitude, PlaceName} = {}) => {
        if(error){
          return res.send({error})
        }
        forecast(latitude, longitude, (error, { temporature, weather}) => {
          if(error){
            return res.send({error})
          }
          res.send({ address: PlaceName, Temporature: temporature, Today: weather})
        })
    })           
})
app.get('/product', (req, res) => {
    if(!req.query.search){
        return res.send('Error:please provide an product')
    }
        res.send('ducpronono1')
    
})


app.get('/help/*', (req, res) => {
    res.render('404',{
        name: 'lux',
        errorMess: 'Help article not found'
    })
})
app.get('*', (req, res) => {
    res.render('404',{
        name: '404',
        errorMess: 'Page not pound'
    })
})
app.listen(3000, () => {
    console.log('successful')
})