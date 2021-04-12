import { config } from "dotenv";

config();

export default {
  DB_URI: process.env.DB_URI,
  expressURI: process.env.EXPRESS_PORT ?? 80,
  db: {
    dialect: process.env.DB_CONN,
    protocol: process.env.DB_CONN,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
