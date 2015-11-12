var _ = require('lodash');

module.exports = {

  post: function (req, res) {
    console.log(req.body);
    res.setHeader('content-type', 'application/json');
    console.log(typeof req.body);
    res.send({
      prenom: req.body.prenom,
      name: req.body.name,
      age: req.body.age
    });
  },

  get:  function(req, res) {
    var data = require('../../data/user.json');

    if(req.query.age){
      req.query.age = parseInt(req.query.age, 10);
    }
    var result = _.filter(data, _.matches(req.query));
    res.send(result);
  },

  getByName:  function(req, res, next) {
    var name = req.params.name;
    if(!name){
      res.redirect('/users',next);
    }
    var data = require('../../data/user.json');
    var result = _.find(data, function(item){
      return item.name === name;
    });

    if(!result){
      res.send(404);
    }
    res.send(result);
  }
};
