var helper = require('./helper');

function init(path, server) {
  server.post({
    path: path
  }, helper.post);

  server.get({
    path: path + '/'
  }, helper.get);

  server.get({
    path: path + '/:name'
  }, helper.getByName);

}

exports.init = init;
