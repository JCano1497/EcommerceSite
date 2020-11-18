const Cart = require('../models/cart');

exports.findAll = (req, res) => {
  Cart.find()
      .then(Carts => {
          res.send(Carts);
      }).catch(err => {
          res.status(500).send({
              message: err.message
          });
      });
};
exports.findbyUsername = (req, res) => {
    Cart.findOne({Username: req.body.Username}, (err, cart) => {
        if (err) throw err;
        res.send(cart);
    })
};

exports.addItems= (req, res) => {
    Cart.create(req.body, (err, data) => {
        if (err) { throw err; }
        res.send(data);
    })
};

exports.removeByUsername= (req, res) => {
    Cart.find({username: req.body.username}, (err, cart) => {
        if (err) throw err;
        res.send(cart);
    })
}

exports.updateById = (req, res) => {
    Cart.findByUsernameAndUpdate(req.params.username, req.body, (err, cart) => {
        if (err) throw err;
        res.send(cart);
    })
}
