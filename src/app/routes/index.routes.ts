import { Router } from 'express';
import customerRouter from './customer.routes';
import productRouter from './product.routes';
import transactionRouter from './transaction.routes';
const router = Router();

router.use('/product', productRouter);
router.use('/customer',customerRouter);
router.use('/transaction',transactionRouter)
export default router;
