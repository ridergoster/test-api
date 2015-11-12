var server = require('./server');

require('./api')(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
//api(server);
