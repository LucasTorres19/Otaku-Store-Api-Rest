require("babel-polyfill")
const express = require("express"); 
const morgan = require("morgan");
const app = express();

app.set('port',process.env.PORT || 4000);
app.set('json spaces',2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/",require('./routes/home'))
app.use("/api/productos",require('./routes/Productos'));
app.use("/api/usuarios",require('./routes/Usuarios'));


app.listen(app.get('port'), ()=>{
    console.log(`Servidor abierto en el puerto ${app.get('port')}.`)
});


