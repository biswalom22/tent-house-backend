import TRANSACTION, { TransactionAttributes } from "../models/transaction.model";
import { transactionRequest, transactionResponse } from "../interfaces/all.interface";
import PRODUCT from "../models/product.model";
import CUSTOMER from "../models/customer.model";


export class TransactionBLL {
	/**
	 * This method is used to add new transaction
	 *
	 * @param {TransactionRequest} transactionRequest
	 * @return {*}  {Promise<TransactionAttributes>}
	 * @memberof TransactionBLL
	 */
	async addTransaction(
		transactionRequest:transactionRequest
	): Promise<TransactionAttributes> {
		try {
			const { transactionType, quantity, product, customer } =
				transactionRequest;

			const customerObj = await CUSTOMER.findOne({
				where: {
					customer_name: customer
				}
			});

			const productObj = await PRODUCT.findOne({
				where: {
					product_title: product
				}
			});
            
			const savedTransaction = await TRANSACTION.create({
				transaction_type: transactionType,
				customer_id: customerObj.customer_id,
				product_id: productObj.product_id,
				quantity
			});

			return savedTransaction;
		} catch (error) {
			throw new Error(
				`method : addTransaction class: TransactionBLL Error: ${error}`
			);
		}
	}

	/**
	 * This method is used to fetch list of all transactions
	 *
	 * @return {*}  {Promise<TransactionResponse[]>}
	 * @memberof TransactionBLL
	 */
	async fetchTransactionList(): Promise<transactionResponse[]> {
		try {
			const transaction: any = await TRANSACTION.findAll({
				attributes: [
					['transaction_id', 'transactionId'],
					['transaction_date_time', 'transactionDate'],
					['transaction_type', 'transactionType'],
					['customer_id', 'customerId'],
					['product_id', 'productId'],
					['quantity', 'quantity']
				],
				raw: true,
				order: [['transaction_date_time', 'DESC']]
			});

			for (const item in transaction) {
				const customerObj = await CUSTOMER.findOne({
					where: {
						customer_id: transaction[item].customerId
					}
				});

				const productObj = await PRODUCT.findOne({
					where: {
						product_id: transaction[item].productId
					}
				});
				transaction[item]['customer'] = customerObj.customer_name;
				transaction[item]['product'] = productObj.product_title;
				transaction[item]['productAvailable'] = productObj.quantity_total - productObj.quantity_booked;
			}

			return transaction;
		} catch (error) {
			throw new Error(
				`method : fetchTransactionList class: TransactionBLL Error: ${error}`
			);
		}
	}
}
