const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1574046448608&autocomplete=true&limit=1'
    request({ url, json: true}, (error, { body }) =>{
        if(error){
            callback('Check the Internet connection', undefined)
        }else if(body.features.length === 0) {
            callback('the possition invalid, please search again', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                PlaceName: body.features[0].place_name
            })
        }

    })
}


module.exports = geocode