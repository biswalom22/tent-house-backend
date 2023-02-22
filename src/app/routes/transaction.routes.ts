import { Router } from 'express';
import { addTransaction, fetchTransactionList } from '../controllers/transaction.controller';

const transactionRouter = Router();

transactionRouter.get('/', fetchTransactionList);
transactionRouter.post('/',addTransaction)

export default transactionRouter;
