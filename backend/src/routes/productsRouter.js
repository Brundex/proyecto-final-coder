import { Router } from "express";
import passport from "passport";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/productsController.js";

const productsRouter = Router()
const generateMockProducts = require('../utils/mockingProducts');
const CustomError = require('../errors/customErrors');
const errorDictionary = require('../errors/errorDictionary');

productsRouter.get('/', getProducts);
productsRouter.get('/mockingproducts', (req, res, next) => {
    try {
      const products = generateMockProducts();
      res.json(products);
    } catch (error) {
      next(new CustomError(errorDictionary.PRODUCT_CREATION_FAILED.message, errorDictionary.PRODUCT_CREATION_FAILED.statusCode));
    }
  });
  

productsRouter.get('/:pid', getProduct)

productsRouter.post('/', passport.authenticate('jwt', { session: false }), createProduct)

productsRouter.put('/:pid', passport.authenticate('jwt', { session: false }), updateProduct)

productsRouter.delete('/:pid', passport.authenticate('jwt', { session: false }), deleteProduct)

export default productsRouter