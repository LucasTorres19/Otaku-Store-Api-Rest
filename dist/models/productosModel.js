"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProductosSchema = new Schema({
  title: String,
  precio: Number,
  img: String,
  type: String,
  desc: String,
  cat: String,
  stock: Number,
  ventas: Number
});
module.exports = mongoose.model('Productos', ProductosSchema);