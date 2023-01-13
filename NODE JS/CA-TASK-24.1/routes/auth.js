import dotenv from "dotenv";
import mysql from "mysql2/promise";
import Joi from "joi";
import bcrypts from "bcryptjs";
import jwt from "jsonwebtoken";
import { MYSQL_CONFIG } from "../src/config.js";
import { jwtSecret } from "../src/config.js";

dotenv.config();

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

export const registerUser = async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    return res.status(400).send({ error: error.message }).end();
  }

  try {
    const hashedPassword = bcrypts.hashSync(userData.password);

    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO users (email, password) VALUES (${mysql.escape(
        userData.email
      )}, '${hashedPassword}')`
    );

    await con.end();

    return res.status(200).send("Registration successfull").end();
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const signIn = async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    return res.status(400).send({ error: "Incorrect email or password" }).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `SELECT * FROM users WHERE email = ${mysql.escape(userData.email)}`
    );

    await con.end();

    if (data.length === 0) {
      return res
        .status(400)
        .send({ error: "incorrect email or password" })
        .end();
    }

    const isAuthed = bcrypts.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        jwtSecret
      );
      console.log(jwtSecret);
      return res.send({ msg: "Signed in succesufully", token }).end();
    }
  } catch (error) {
    return res.status(500).send({ error: "Unexpected error" });
  }
};
