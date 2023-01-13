import dotenv from "dotenv";
dotenv.config();

export const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: +process.env.port,
};

export const PORT = process.env.SERVERPORT || 5004;
export const jwt_Secret = process.env.JWT_SECRET;
