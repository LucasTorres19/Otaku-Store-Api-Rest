"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');

var UsuariosModel = require('./../models/UsuariosModel');

var UsuarioModel = mongoose.model('Usuarios');

exports.findAllUsuarios = function (req, res) {
  UsuarioModel.find(function (err, usuarios) {
    if (err) return res.send(500, err.message);
    var token = req.headers['x-access-token'];

    if (!token) {
      return res.status(401).json({
        auth: false,
        Message: "No tienes Token"
      });
    }

    try {
      var tokendecodificado = jwt.verify(token, 'miami');
      console.log('GET /usuarios');
      res.status(200).json(usuarios);
    } catch (err) {
      console.log(err);
      res.status(401).json({
        error: err
      });
    }
  });
};

exports.FindById = function (req, res) {
  var token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).json({
      auth: false,
      Message: "No tienes Token"
    });
  }

  try {
    var tokendecodificado = jwt.verify(token, 'miami');

    if (!tokendecodificado.id) {
      return res.status(404).send("Usuario no encontrado.");
    }

    UsuarioModel.findById(req.params.id, function (err, usuarios) {
      if (err) return res.send(500, err.message);
      console.log('GET /usuarios/' + req.params.id);
      res.status(200).jsonp(usuarios);
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      error: err
    });
  }
};

exports.AddUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var usuario, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("POST");
            console.log(req.body);
            usuario = new UsuarioModel({
              nombre: req.body.nombre,
              estado: req.body.estado,
              mail: req.body.mail,
              genero: req.body.genero,
              contraseña: req.body.contraseña,
              dir: req.body.dir,
              telefono: req.body.telefono
            });
            _context.next = 5;
            return usuario.encryptarPass(usuario.contraseña);

          case 5:
            usuario.contraseña = _context.sent;
            token = jwt.sign({
              id: usuario._id
            }, 'miami', {
              expiresIn: 60 * 60 * 8760
            });
            usuario.save(function (err, usuarios) {
              if (err) return res.status(500).send(err.message);
              res.status(200).jsonp({
                auth: true,
                token: token
              });
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.UpdateUsuario = function (req, res) {
  UsuarioModel.findById(req.params.id, function (err, usuarios) {
    usuarios.nombre = req.body.nombre;
    usuarios.estado = req.body.estado;
    usuarios.mail = req.body.mail;
    usuarios.genero = req.body.genero;
    usuarios.contraseña = req.body.contraseña;
    usuarios.dir = req.body.dir;
    usuarios.telefono = req.body.telefono;
    usuarios.save(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(usuarios);
    });
  });
};

exports.deleteUsuario = function (req, res) {
  UsuarioModel.findById(req.params.id, function (err, usuarios) {
    usuarios.remove(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).send();
    });
  });
};