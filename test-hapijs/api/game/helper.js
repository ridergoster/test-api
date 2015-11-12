var _ = require('lodash');

module.exports = {

  post: function (req, res) {
    return res({
      name: req.payload.name,
      console: req.payload.console
    });
  },

  get:  function(req, res) {
    var data = require('../../data/game.json');
    var result = _.filter(data, _.matches(req.query));
    if(_.isEmpty(result)){
      return res('Games not found... :/').code(404);
    }
    return res(result);
  },

  getByName:  function(req, res) {
    var name = req.params.name;

    var data = require('../../data/game.json');
    var result = _.find(data, function(item){
      return item.name === name;
    });
    if(!result){
      return res('Games not found... :/').code(404);
    }
    return res(result);
  }
};
