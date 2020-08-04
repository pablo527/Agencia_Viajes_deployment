const Viaje = require('../models/Viajes')

const Testimonial = require('../models/Testimoniales')

exports.infoHome = async (req, res )=> {
    // Realizar multiples consultar en una misma vista
    const viajes = await Viaje.findAll({
        limit: 3
    })
    const testimoniales = await Testimonial.findAll({
        limit: 3
    })
    res.render('index', {
        pagina :'Proximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
}