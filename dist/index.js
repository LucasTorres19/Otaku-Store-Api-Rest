"use strict";

require("babel-polyfill");

var app = require('./app');

require('./database');

app.listen(app.get('port'), function () {
  console.log("Servidor abierto en el puerto ".concat(app.get('port'), "."));
});