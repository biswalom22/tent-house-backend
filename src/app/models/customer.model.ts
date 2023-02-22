import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../config/database';
import { eTable } from '../enum/table.enum';

export interface CustomerAttributes {
	customer_id: number;
	customer_name: string;
}

class CUSTOMER extends Model<CustomerAttributes> implements CustomerAttributes {
	public customer_id: number;
	public customer_name: string;
}

CUSTOMER.init(
	{
		customer_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		customer_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
	},
	{
		sequelize: sequelizeConnection,
		timestamps: false,
		tableName: eTable.CUSTOMER
	}
);

export default CUSTOMER;
