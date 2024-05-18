const errorDictionary = {
    PRODUCT_NOT_FOUND: {
      message: 'Product not found',
      statusCode: 404
    },
    PRODUCT_CREATION_FAILED: {
      message: 'Failed to create product',
      statusCode: 500
    },
    CART_ADDITION_FAILED: {
      message: 'Failed to add product to cart',
      statusCode: 500
    },
    // Añade más errores según necesites
  };
  
  module.exports = errorDictionary;