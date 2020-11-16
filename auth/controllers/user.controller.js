const Users = require('../models/User');


exports.findAll = (req, res) => {
    Users.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.removeById = (req, res) => {
  Users.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) throw err;
      res.send(user);
  })
}

exports.findById = (req, res) => {
  Users.findById(req.params.id, (err, user) => {
      if (err) throw err;
      res.send(user);
  })
};

exports.updateById = (req, res) => {
  Users.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) throw err;
      res.send(user);
  })
};

