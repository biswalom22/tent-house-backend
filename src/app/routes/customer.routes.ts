import { Router } from 'express';
import { addCustomer, getAllCustomer } from '../controllers/customer.controller';

const customerRouter = Router();

customerRouter.get('/', getAllCustomer);
customerRouter.post('/',addCustomer)

export default customerRouter;
