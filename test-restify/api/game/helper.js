var _ = require('lodash');

module.exports = {

  post: function (req, res) {
    console.log(req);
    res.setHeader('content-type', 'application/json');
    console.log(typeof req.body);
    res.send({
      name: req.body.name,
      console: req.body.console
    });
  },

  get:  function(req, res) {
    var data = require('../../data/game.json');
    var result = _.filter(data, _.matches(req.query));
    res.send(result);
  },

  getByName:  function(req, res, next) {
    var name = req.params.name;
    if(!name){
      res.redirect('/game', next);
    }
    var data = require('../../data/game.json');
    var result = _.find(data, function(item){
      return item.name === name;
    });

    if(!result){
      res.send(404);
    }
    res.send(result);
  }
};
