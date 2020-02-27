const axios = require('axios');

const getClima = async(lat, lng) => {
    const url = ''
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ace0e055eea0f4e30b4aa134916d3d35&units=metric`);
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}