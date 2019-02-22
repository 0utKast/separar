"use strict";

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES6 syntax
double = a => a * 2;

const requestHandler = function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Hello, World!");
};

const server = _http.default.createServer(requestHandler);

server.listen(8080);
