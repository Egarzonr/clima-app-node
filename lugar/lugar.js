const axios = require('axios');
const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir)


    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json?`,
        params: { 'access_token': 'pk.eyJ1IjoiZWdhcnpvbnIiLCJhIjoiY2tmcWRjcDdpMGlmeDJ1bXVzc2N5N3MyOCJ9._KxsW_nrXYsov8mRifx21A' }
    });

    const resp = await instance.get();
    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultador para ${dir}`)
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const latitud = data.center[1];
    const longitud = data.center[0];

    return {
        direccion,
        latitud,
        longitud
    }
}


module.exports = {
    getLugarLatLng
}