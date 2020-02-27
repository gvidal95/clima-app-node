const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const ciudad = await lugar.getLugarLatLng(direccion);
        const ciudadClima = await clima.getClima(ciudad.lat, ciudad.lng);
        return `El clima de '${ciudad.direccion}' es de ${ciudadClima}°C`;
    } catch (error) {
        return `No se pudo determinar el clima de '${direccion}'`;
    }

}

getInfo(argv.direccion)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    });