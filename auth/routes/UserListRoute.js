module.exports = function (app) {

  var users = require('../controllers/user.controller')

  app.get('/api/users', users.findAll);

  app.get('/api/users/:id', users.findById);

  app.put('/api/users/:id', users.updateById);

  app.delete('/api/users/:id', users.removeById);
}
