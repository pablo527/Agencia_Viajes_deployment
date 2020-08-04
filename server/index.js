//importamos express
const express = require('express')
//import routes
const routes = require('./routes')
const path = require('path')
//importar configs
const configs = require('./config')
//importar body parser
const bodyParser = require('body-parser')

require('dotenv').config({path : 'variables.env'})

//importamos configs de database


/* db.authenticate()
    .then(()=> console.log('db conect...'))
    .catch(error => console.log(error)); */
//config express
const app = express(); 

//validar estado desarrollo o produccion
const config = configs[app.get('env')]

//creamos la variables para el estado del sitio web

app.locals.titulo = config.nombresitio;

//habilitamos pug
app.set('view engine', 'pug');

// cargar vistas
app.set('views', path.join(__dirname, './views'))

//cargar la carpeta public
app.use(express.static('public'))

//obtener fecha actual => footer
app.use((req,res,next)=>{
    const fecha = new Date()
    res.locals.fechaActual = fecha.getFullYear();
    // activar la ruta
    res.locals.ruta = req.path;
    return next();
    
})

//ejecutamos body parser
app.use(bodyParser.urlencoded({extended:true}));

// cargar las rutas
app.use('/', routes())

// puerto y host para la app // produccion
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host, () =>{
    console.log('El servidor esta funcionando')
})

//app.listen(3000)