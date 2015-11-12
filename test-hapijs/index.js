var server = require('./server');

require('./api')(server);

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
