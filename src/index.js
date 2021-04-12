//librerias uwu.
const express = require("express")
const morgan = require("morgan")
const app = express()

//opciones.
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

//middlewares.

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));

//server.
app.listen(app.get('port'), ()=>{

    console.log(`Servidor abierto en el puerto ${app.get('port')}.`)
});


