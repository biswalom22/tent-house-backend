import { customerRequest, customerResponse, productRequest, ProductResponse } from '../interfaces/all.interface';
import CUSTOMER, { CustomerAttributes } from '../models/customer.model';

export class CustomerBLL {

/**
	 * This method is used to add new cusomer
	 *
	 * @param {customerRequest} customerRequest
	 * @return {*}  {Promise<CustomerAttributes>}
	 * @memberof CustomerBLL
	 */
  async addCustomer(
	customerRequest: customerRequest
): Promise<CustomerAttributes> {
	try {
		const { customerName } = customerRequest;

		const savedCustomer = await CUSTOMER.create({
			customer_name: customerName,
		});

		return savedCustomer;
	} catch (error) {
		throw new Error(
			`method : addProduct class: CustomerBLL Error: ${error}`
		);
	}
}

	/**
	 * This method is used to fetch all Customer
	 *
	 * @return {*}  {Promise<customerResponse[]>}
	 * @memberof CustomerBLL
	 */
	async getAllCustomer(): Promise<customerResponse[]> {
		try {
			const customer: any = await CUSTOMER.findAll({
				raw: true,
				attributes: [
					['customer_id', 'customerId'],
					['customer_name', 'customerName'],
				],
				order: [['customer_name', 'ASC']]
			});
			return customer;
		} catch (error) {
			throw new Error(
				`method : getAllCustomer class: CustomerBLL Error: ${error}`
			);
		}
	}
}
