module.exports = function (app) {

  var cart = require('../controllers/cart.controller')

  app.get('/api/Carts', cart.findAll);
  app.get('/api/Carts/:username', cart.findbyUsername);

  app.post('/api/Carts', cart.addItems);

//  app.put('/api/cart/:id', cart.updateById);

 // app.delete('/api/products/:id', cart.removeById);

}
