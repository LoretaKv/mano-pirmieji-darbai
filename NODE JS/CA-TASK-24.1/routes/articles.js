import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { MYSQL_CONFIG } from "../src/config.js";
import { jwtSecret } from "../src/config.js";
import jwt from "jsonwebtoken";

dotenv.config();

const TOKEN_START = "Bearer ";

export const getArticles = async (req, res) => {
  let token = req.headers.authorization;

  if (!token?.startsWith(TOKEN_START)) {
    return res.status(403).send("Token is not a valid Bearer token").end();
  }

  token = token.replace("Bearer ", "");

  try {
    jwt.verify(token, jwtSecret);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [results] = await con.execute("SELECT * FROM articles");
    await con.end();

    return res.status(200).send(results).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
};
