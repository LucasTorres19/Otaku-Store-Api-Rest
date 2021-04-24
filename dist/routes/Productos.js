"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("express"),
    Router = _require.Router;

var router = Router();

var connection = require("./../database/connect");

var _require2 = require("bson"),
    ObjectId = _require2.ObjectId;

router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return connection();

          case 2:
            db = _context.sent;
            db.collection('Productos').find({}).toArray(function (err, result) {
              if (err) throw err;
              res.send(result);
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, title, precio, img, type, desc, cat, stock, ventas, db;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, precio = _req$body.precio, img = _req$body.img, type = _req$body.type, desc = _req$body.desc, cat = _req$body.cat, stock = _req$body.stock, ventas = _req$body.ventas;
            _context2.next = 3;
            return connection();

          case 3:
            db = _context2.sent;

            //verificando que existen las varibles.
            if (title && precio && img && type && desc && cat && stock && ventas) {
              db.collection('Productos').insertOne(req.body);
              res.send("Guardado");
            } else {
              res.send("Error al Cargar.");
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.put('/:id', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var db, _req$body2, title, precio, img, type, desc, cat, stock, ventas, param;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return connection();

          case 2:
            db = _context3.sent;
            _req$body2 = req.body, title = _req$body2.title, precio = _req$body2.precio, img = _req$body2.img, type = _req$body2.type, desc = _req$body2.desc, cat = _req$body2.cat, stock = _req$body2.stock, ventas = _req$body2.ventas;
            param = req.params;

            if (title && precio && img && type && desc && cat && stock && ventas) {
              db.collection('Productos').updateOne({
                _id: ObjectId(param.id)
              }, {
                $set: req.body
              }, {
                upsert: true
              });
              res.send("Actualizado.");
            } else {
              res.send("Error al actualizar el producto.");
            }

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router["delete"]('/:id', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var db, param;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return connection();

          case 2:
            db = _context4.sent;
            param = req.params;
            db.collection('Productos').removeOne({
              _id: ObjectId(param.id)
            });
            res.send("Borrado");

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
module.exports = router;