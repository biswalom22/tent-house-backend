import { Router } from 'express';
import { addProduct, getAllProduct } from '../controllers/product.controller';

const productRouter = Router();

productRouter.get('/', getAllProduct);
productRouter.post('/',addProduct)

export default productRouter;
