import PRODUCT, { ProductAttributes } from '../models/product.model';
import { productRequest, ProductResponse } from '../interfaces/all.interface';

export class ProductBLL {

/**
	 * This method is used to add new product
	 *
	 * @param {productRequest} productRequest
	 * @return {*}  {Promise<ProductAttributes>}
	 * @memberof ProductBLL
	 */
 async addProduct(
	productRequest: productRequest
): Promise<ProductAttributes> {
	try {
		const { productTitle, quantityTotal, price } = productRequest;

		const savedProduct = await PRODUCT.create({
			product_title: productTitle,
			quantity_total: quantityTotal,
			price: price,
		});

		return savedProduct;
	} catch (error) {
		throw new Error(
			`method : addProduct class: ProductBLL Error: ${error}`
		);
	}
}

	/**
	 * This method is used to fetch all Products
	 *
	 * @return {*}  {Promise<ProductResponse[]>}
	 * @memberof ProductBLL
	 */
	async getAllProduct(): Promise<ProductResponse[]> {
		try {
			const product: any = await PRODUCT.findAll({
				raw: true,
				attributes: [
					['product_id', 'productId'],
					['product_title', 'productTitle'],
					['quantity_total', 'quantityTotal'],
					['quantity_booked', 'quantityBooked'],
					['price', 'price']
				],
				order: [['product_title', 'ASC']]
			});
			return product;
		} catch (error) {
			throw new Error(
				`method : getAllProducts class: ProductBLL Error: ${error}`
			);
		}
	}
}
