const express = require('express')

const router = express.Router()

/*Controladores*/
const homeController = require('../controllers/home.Controller')

const nosotrosController = require('../controllers/nosotros.Controller')

const viajesController = require('../controllers/viajes.Controller')

const testimonialesController = require('../controllers/testimoniales.Controller')
// funcion para el manejo de las rutas
module.exports = function (){
    router.get('/', homeController.infoHome);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.infoViajes)

    router.get('/viajes/:id', viajesController.infoViaje);

    router.get('/testimoniales', testimonialesController.infoTestimoniales);

    // cuando enviamos el formulario
    // ejecutamos en index principal el bodyParse
    router.post('/testimoniales', testimonialesController.postearTestimoniales);

    return router;
}