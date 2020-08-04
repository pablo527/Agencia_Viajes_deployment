const Testimonial = require('../models/Testimoniales')

exports.infoTestimoniales = async (req, res)=>{
    // antes va la incerssiona a la bd
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina :'Testimoniales',
        testimoniales
    })
}

exports.postearTestimoniales = async (req, res)=>{
    // validar que todos los campos esten completos
    let {nombre, correo, mensaje} = req.body

    let = errores =[]
    
    if(!nombre){
        errores.push({'mensaje': 'Agregar nombre' })
    }
    if(!correo){
        errores.push({'mensaje': 'Agregar correo' })
    }
    if(!mensaje){
        errores.push({'mensaje': 'Agregar Mesanje' })
    }

    //revisar errors
    if(errores.length > 0){
        //mosotrar errores en la vista
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        // enviar a bd
       const testimonial = await Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        res.redirect('/testimoniales')

    }

}