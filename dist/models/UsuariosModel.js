"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bcrypt = require('bcryptjs'); //nombre && estado && mail && genero && contraseña && dir || telefono


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

UsuariosSchema.methods.encryptarPass = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(contraseña) {
    var salt;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bcrypt.genSalt(12);

          case 2:
            salt = _context.sent;
            return _context.abrupt("return", bcrypt.hash(contraseña, salt));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = mongoose.model('Usuarios', UsuariosSchema);