"use strict";

//Imports
require("babel-polyfill");

var express = require("express");

var app = express();

var morgan = require("morgan");

var mongoose = require('mongoose'); //imports de models y controllers


var Productos = express.Router();

var ProductosModel = require('./models/productosModel');

var ProductosCtrl = require('./controllers/productosCtrl');

var Usuarios = express.Router();

var UsuariosModel = require('./models/UsuariosModel');

var UsuariosCrtl = require('./controllers/UsuariosCtrl'); //settings


app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2); //middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); // Connection to DB

mongoose.connect('mongodb://wachiraton11:soyhermosho11@cluster0-shard-00-00.skuwb.mongodb.net:27017,cluster0-shard-00-01.skuwb.mongodb.net:27017,cluster0-shard-00-02.skuwb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7twvaf-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, function (err, res) {
  if (err) throw err;
  console.log('Connected to Database');
}); //routes

app.use("/", require('./routes/home'));
Productos.route('/productos').get(ProductosCtrl.findAllProductos).post(ProductosCtrl.AddProducto);
Productos.route('/productos/:id').get(ProductosCtrl.FindById).put(ProductosCtrl.UpdateProductos)["delete"](ProductosCtrl.deleteProducto);
Usuarios.route('/usuarios').get(UsuariosCrtl.findAllUsuarios).post(UsuariosCrtl.AddUser);
Usuarios.route('/usuarios/:id').get(UsuariosCrtl.FindById).put(UsuariosCrtl.UpdateUsuario)["delete"](UsuariosCrtl.deleteUsuario);
app.use('/api', Productos);
app.use('/api', Usuarios); //server

app.listen(app.get('port'), function () {
  console.log("Servidor abierto en el puerto ".concat(app.get('port'), "."));
});