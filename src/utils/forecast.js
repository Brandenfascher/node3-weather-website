const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cbb0e7eac8ec4e0585ae8745cc6c942e&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                forecastText: body.current.weather_descriptions[0]
                 + ". It is currently " + body.current.temperature + " degrees out. It feels like "
                 + body.current.feelslike + " degrees out.",
                forecastIcon: body.current.weather_icons[0]
            })
        }
    })
}


module.exports = forecast