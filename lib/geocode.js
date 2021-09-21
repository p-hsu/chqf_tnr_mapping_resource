const axios = require('axios');

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY

async function geocodeAddress(address) {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + ACCESS_TOKEN
    const response = await axios.get(geocodeUrl).then(response => response.data)
    const coordinates = response.features[0].geometry
    console.log("response >>>>>", coordinates)

    return coordinates
}

export default geocodeAddress