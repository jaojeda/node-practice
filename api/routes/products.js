const { Router } = require('express');
const mongoose = require('mongoose');

const Product = require('../models/Product');

module.exports = Router()
  .get('/', (req, res, next) => {
    res.status(200).json({
      message: 'Handling GET request to /products'
    });
  })

  .post('/', (req, res, next) => {
    const { name, price } = req.body;

    console.log(name, price);

    Product
      .create({ name, price })
      .then(product => res.send(product))
      .catch(next);
  })

  .get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if (id === 'special') {
      res.status(200).json({
        message: 'This id is special'
      });
    } else {
      res.status(200).json({
        message: `You passed id ${id}`
      });
    }
  })

  .patch('/:productId', (req, res, next) => {
    const id = req.params.productId;

    res.status(200).json({
      message: `Updated product ${id}`
    });
  })
  
  .delete('/:productId', (req, res, next) => {
    const id = req.params.productId;

    res.status(200).json({
      message: `Deleted product ${id}`
    });
  }); 

