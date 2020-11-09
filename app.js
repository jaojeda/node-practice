const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders')

app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

app.use(require('./api/middleware/error-404'));
app.use(require('./api/middleware/error-handler'));

module.exports = app;
