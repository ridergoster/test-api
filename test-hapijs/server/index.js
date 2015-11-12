var hapi = require('hapi');

var server = new hapi.Server();
server.connection({ port: 3000 });


module.exports = server;
