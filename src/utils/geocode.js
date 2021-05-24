const request = require('request')

const geocode = (address, callback) => {
    //encodeURI deals with special characters
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2prMzkiLCJhIjoiY2tvdHNneGk4MGVoNTJwcWpxNDk0N2tmNSJ9.Ssmg_pjb7LxCf0-FM_jCjg'

    request({url, json : true}, (error, {body} = {}) => {
        const {length, center, place_name} = body.features
        if (error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find location, try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[1].center[1],
                longitude: body.features[1].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode