import '@babel/polyfill';
import http from 'http'

function requestHandler(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Otro cambio');
}
const server = http.createServer(requestHandler);
server.listen(8080);
