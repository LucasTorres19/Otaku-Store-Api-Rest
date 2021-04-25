"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema; //nombre && estado && mail && genero && contraseña && dir || telefono

var UsuariosSchema = new Schema({
  nombre: {
    type: String
  },
  estado: {
    type: Number
  },
  mail: {
    type: String
  },
  genero: {
    type: String,
    "enum": ['Hombre', 'Mujer', 'Otro']
  },
  contraseña: {
    type: String
  },
  dir: {
    type: String
  },
  telefono: {
    type: Number
  }
});
module.exports = mongoose.model('Usuarios', UsuariosSchema);