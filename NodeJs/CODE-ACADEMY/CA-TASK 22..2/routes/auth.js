import express from "express";
import mysql from "mysql2/promise";
import Joi from "joi";
import bcrypt from "bcryptjs";
import { MYSQL_CONFIG } from "../src/config.js";

const router = express.Router();

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.post("/register", async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    return res.status(400).send({ error: "Incorrect data sent" }).end();
  }
  console.log(userData);
  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `INSERT INTO users (email, password) VALUES (${mysql.escape(
        userData.email
      )}, '${hashedPassword}')`
    );
    console.log(data);

    await con.end();

    return res.send().end();
  } catch (error) {
    return res.status(500).send({ error: "Unexpected error" });
  }
});

// export const registerUser = async (req, res) => {
//   let userData = req.body;
//   try {
//     userData = await userSchema.validateAsync(userData);
//   } catch (error) {
//     return res.status(400).send({ error: error.message }).end();
//   }

//   try {
//     const hashedPassword = bcrypt.hashSync(userData.password);

//     const con = await mysql.createConnection(MYSQL_CONFIG);
//     await con.execute(
//       `INSERT INTO users (email, password) VALUES (${mysql.escape(
//         userData.email
//       )}, '${hashedPassword}')`
//     );

//     await con.end();

//     return res.status(200).send("User registered successfully").end(); // res.send(data)
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

router.post("/login", async (req, res) => {
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
        .send({ error: "Incorrect email or password" })
        .end();
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      return res.send("OK").end();
    }

    return res.status(400).send({ error: "Incorrect email or password" }).end();
  } catch (error) {
    return res.status(500).send({ error: "Unexpected error" });
  }
});

export default router;
