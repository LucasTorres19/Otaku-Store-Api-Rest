"use strict";

//Imports
var express = require("express");

var app = express();

var morgan = require("morgan"); //imports controllers


var Productos = express.Router();

var ProductosCtrl = require('./controllers/productosCtrl');

var Usuarios = express.Router();

var UsuariosCrtl = require('./controllers/UsuariosCtrl'); //settings


app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2); //middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); //routes

app.use("/", require('./routes/home'));
Productos.route('/productos').get(ProductosCtrl.findAllProductos).post(ProductosCtrl.AddProducto);
Productos.route('/productos/:id').get(ProductosCtrl.FindByid) //?
.put(ProductosCtrl.UpdateProductos)["delete"](ProductosCtrl.deleteProducto);
Usuarios.route('/usuarios').get(UsuariosCrtl.findAllUsuarios).post(UsuariosCrtl.AddUser);
Usuarios.route('/usuarios/:id').get(UsuariosCrtl.FindById).put(UsuariosCrtl.UpdateUsuario)["delete"](UsuariosCrtl.deleteUsuario);
app.use('/api', Productos);
app.use('/api', Usuarios);
module.exports = app;