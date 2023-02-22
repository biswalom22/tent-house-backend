import {Request,Response} from 'express';
import { TransactionBLL } from '../bll/transaction.bll';
import { eErrorMessage } from '../enum/error-message.enum';
import { eStatusCode } from '../enum/status-code.enum';




export const addTransaction = async (req:Request,res:Response)=>{
    try{
        if(!Object.keys(req.body).length)
            return res.
            status(eStatusCode.BAD_REQUEST)
            .send(eErrorMessage.FieldContent);

       const result = await new TransactionBLL().addTransaction(req.body);
       if(result)
       return res.status(eStatusCode.CREATED).send(result);
       else
       return res
       .status(eStatusCode.BAD_REQUEST)
       .send('Failed to save Product');
    } catch (error){
        return res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`)
    }
}

export const fetchTransactionList = async (req: Request, res: Response) => {
	try {
		const result = await new TransactionBLL().fetchTransactionList();
		if (result.length) {
			return res.status(eStatusCode.OK).send(result);
		} else {
			return res
				.status(eStatusCode.NOT_FOUND)
				.send(eErrorMessage.NoRecord);
		}
	} catch (error) {
		res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
	}
};
