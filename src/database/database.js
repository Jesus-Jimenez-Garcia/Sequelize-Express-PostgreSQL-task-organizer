import Sequelize from "sequelize";
import 'dotenv/config'

export const sequelize = new Sequelize(process.env.DATA_BASE, process.env.USER_NAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});
