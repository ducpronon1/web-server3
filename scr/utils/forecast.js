const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/86ba2b025dab7553a56961838abfb4e8/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true}, ( error, { body }) => {
        if(error){
            callback('please check the internet connection', undefined)
        }else if(body.error) {
            callback('unable to find lacation', undefined)
        }else{
            callback(undefined, {
                temporature: body.currently.temperature,
                weather: body.daily.summary
            })
        }
    })

}
module.exports = forecast