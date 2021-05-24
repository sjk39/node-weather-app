const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ab8ca7e0719fe83e4f159d8c0d490ea4&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body} = {}) =>{
        //console.log(response)
        //const data = JSON.parse(response.body)
        if(error){
            callback('Unable to connect to location service!', undefined)}
        else if(body.error){
            //handle server side error
            callback('Uanble to find location!', undefined)}
        else{
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out with ' + body.current.cloudcover + '% cloud cover. ')
    }})
}

module.exports = forecast