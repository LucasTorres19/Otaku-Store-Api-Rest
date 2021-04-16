//librerias uwu.
const express = require("express"); 
const morgan = require("morgan");

//imports
// const connection = require("./database/connect");

const app = express();

// const init = async () => {
//     const db = await connection(); // obtenemos la conexión
  
//     await db.collection('user').insertOne({ // insertamos un usuario
//       name: 'devsin.site'
//     });
//   };
  
  //init();

//config

app.set('port',process.env.PORT || 4000);
app.set('json spaces',2);

//middlewares.

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/mangas'));
app.use("/api/comics",require('./routes/comics'));
app.use(require('./routes/juegos'));
app.use(require('./routes/hardware'));
app.use(require('./routes/merchandising'));
app.use(require('./routes/libros'));

//server.
app.listen(app.get('port'), ()=>{

    console.log(`Servidor abierto en el puerto ${app.get('port')}.`)
});


