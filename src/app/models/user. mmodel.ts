import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../config/database';
import { eTable } from '../enum/table.enum';

export interface UserAttributes {
	user_id: number;
	name: string;
	email: string;
	password: string;
}

class USER extends Model<UserAttributes> implements UserAttributes {
	public user_id: number;
	public name: string;
	public email: string;
	public password: string;
}

USER.init(
	{
		user_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(30),
			allowNull: false
		}
	},
	{
		sequelize: sequelizeConnection,
		timestamps: false,
		tableName: eTable.USER
	}
);

export default USER;
