"use strict";

require("babel-polyfill");

var express = require("express");

var morgan = require("morgan");

var app = express();
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use("/api/productos", require('./routes/Productos'));
app.use("/api/usuarios", require('./routes/Usuarios'));
app.listen(app.get('port'), function () {
  console.log("Servidor abierto en el puerto ".concat(app.get('port'), "."));
});