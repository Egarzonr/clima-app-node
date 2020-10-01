const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6e1527e070eac6f0c28b2abe3dbc5043&units=metric`)
    return resp.data.main.temp;

}

module.exports = {
    getClima
}