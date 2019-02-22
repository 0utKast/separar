"use strict";

require("@babel/polyfill");

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestHandler(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Otro cambio');
}

const server = _http.default.createServer(requestHandler);

server.listen(8080);