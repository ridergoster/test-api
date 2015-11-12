var game = require('./game/controller');
var users = require('./users/controller');
module.exports = function(server) {
  game.init('/game/', server);
  users.init('/users/', server);
};
