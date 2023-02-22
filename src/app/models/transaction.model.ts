import { DataTypes, DATE, Model } from 'sequelize';
import { sequelizeConnection } from '../../config/database';
import { eTable } from '../enum/table.enum';
import PRODUCT from './product.model';
import CUSTOMER from './customer.model'

export interface TransactionAttributes {
	transaction_id: number;
	transaction_date_time: Date;
	transaction_type: string;
	quantity: number;
	product_id: number;
    customer_id: number
    transaction_id_parent: number
}

class TRANSACTION extends Model<TransactionAttributes> implements TransactionAttributes {
	public transaction_id: number;
	public transaction_date_time: Date;
	public transaction_type: string;
	public quantity: number;
	public product_id: number;
    public customer_id: number;
    public transaction_id_parent: number

}

TRANSACTION.init(
	{
		transaction_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		transaction_date_time: {
			type: DataTypes.DATE,
			defaultValue:Date.now()
		},
		transaction_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		product_id:{
			type: DataTypes.INTEGER,
			allowNull:false,
            references: {
				model: PRODUCT,
				key: 'product_id'
			}
		},
        customer_id:{
			type: DataTypes.INTEGER,
			allowNull:false,
            references: {
				model: CUSTOMER,
				key: 'customer_id'
			}
		},
        transaction_id_parent:{
            type: DataTypes.INTEGER
        }

	},
	{
		sequelize: sequelizeConnection,
		timestamps: false,
		tableName: eTable.TRANSACTION
	}
);

export default TRANSACTION;
