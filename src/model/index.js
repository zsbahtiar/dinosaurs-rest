import Sequelize from "sequelize";
import config from "../config";

const sequelize = new Sequelize(config.DB_URI, {
  ...config.db,
});

const db = {
  Sequelize,
  connection: sequelize,
};

export default db;
