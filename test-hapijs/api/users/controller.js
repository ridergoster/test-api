var helper = require('./helper');

function init(path, server) {

  server.route({
    method: 'POST',
    path: path,
    handler: helper.post
  });

  server.route({
    method: 'POST',
    path: path + '/',
    handler: helper.post
  });

  server.route({
    method: 'GET',
    path: path,
    handler: helper.get
  });

  server.route({
    method: 'GET',
    path: path+'/',
    handler: helper.get
  });

  server.route({
    method: 'GET',
    path: path + '/{name}',
    handler: helper.getByName
  });

}

exports.init = init;
