import * as dotenv from 'dotenv';
dotenv.config();

import { Dialect, Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USERNAME as string;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;

export const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
	dialect: dbDriver,
	logging: false
});
