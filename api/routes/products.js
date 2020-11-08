const { Router } = require('express');

module.exports = Router()
  .get('/', (req, res, next) => {
    res.status(200).json({
      message: 'Handling GET request to /products'
    });
  })

  .post('/', (req, res, next) => {
    res.status(200).json({
      message: 'Handling POST request to /products'
    });
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

