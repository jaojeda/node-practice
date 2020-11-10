const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
// const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders')

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', ordersRoutes);

app.use(require('./api/middleware/error-404'));
app.use(require('./api/middleware/error-handler'));

module.exports = app;
