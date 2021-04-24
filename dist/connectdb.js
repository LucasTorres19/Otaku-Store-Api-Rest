"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

module.exports = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var dbName, url, client, db;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dbName = 'mqmStore';
          url = "mongodb://wachiraton11:soyhermosho11@cluster0-shard-00-00.skuwb.mongodb.net:27017,cluster0-shard-00-01.skuwb.mongodb.net:27017,cluster0-shard-00-02.skuwb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7twvaf-shard-0&authSource=admin&retryWrites=true&w=majority";
          _context.prev = 2;
          client = new MongoClient(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
          });
          _context.next = 6;
          return client.connect();

        case 6:
          db = client.db(dbName);
          return _context.abrupt("return", db);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[2, 10]]);
}));