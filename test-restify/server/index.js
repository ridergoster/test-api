var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.queryParser({ mapParams: false }));

module.exports = server;
