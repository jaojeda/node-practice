const { Router } = require('express');

module.exports = Router()
  .get('/', (req, res, next) => {
    res.status(200).json({
      message: 'Orders were fetched'
    });
  })
  
  .post('/', (req, res, next) => {
    const order = {
      productId: req.body.productId,
      quantity: req.body.quantity
    };

    res.status(201).json({
      message: 'Order was created',
      order
    });
  })

  .get('/:orderId', (req, res, next) => {
    res.status(200).json({
      message: 'Order details',
      orderId: req.params.orderId
    });
  })
   
  .delete('/:orderId', (req, res, next) => {
    res.status(200).json({
      message: 'Order deleted',
      orderId: req.params.orderId
    });
  })
