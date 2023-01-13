import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const jwtSecret = process.env.jwtSecret;
let payLoad = null;

export const getHome = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ err: "User unauthorised" }).end();
  }

  try {
    payLoad = jwt.verify(token, jwtSecret);
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      return res.status(401).send({ err: "User unauthorised" }).end();
    }
    return res.status(400).end;
  }
  res.send(`welcome ${payLoad.userName}`).end();
};
