


module.exports = function (app) {

    var product = require('../controllers/product.controller')

    app.get('/api/products', product.findAll);

    app.get('/api/products/:id', product.findById);

    app.post('/api/products', product.addProduct);

    app.put('/api/products/:id', product.updateById);

    app.delete('/api/products/:id', product.removeById);

}
