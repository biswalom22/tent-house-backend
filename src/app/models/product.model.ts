import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../config/database';
import { eTable } from '../enum/table.enum';

export interface ProductAttributes {
	product_id: number;
	product_title: string;
	quantity_total: number;
	quantity_booked: number;
	price: number;
}

class PRODUCT extends Model<ProductAttributes> implements ProductAttributes {
	public product_id: number;
	public product_title: string;
	public quantity_total: number;
	public quantity_booked: number;
	public price: number;
}

PRODUCT.init(
	{
		product_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		product_title: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		quantity_total: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantity_booked: {
			type: DataTypes.INTEGER,
		},
		price:{
			type: DataTypes.INTEGER,
			allowNull:false
		}
	},
	{
		sequelize: sequelizeConnection,
		timestamps: false,
		tableName: eTable.PRODUCT
	}
);

export default PRODUCT;
