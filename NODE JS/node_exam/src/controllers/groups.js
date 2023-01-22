import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { jwtSecret, MYSQL_CONFIG } from '../../config.js';
import dotenv from 'dotenv';

dotenv.config();

const TOKEN_START = 'Bearer ';

export const getGroups = async (req, res) => {
	let token = req.headers.authorization;

	if (!token?.startsWith(TOKEN_START)) {
		return res.status(403).send('Token is not a valid Bearer token').end();
	}

	token = token.replace('Bearer ', '');

	try {
		jwt.verify(token, jwtSecret);
	} catch (err) {
		if (err instanceof jwt.JsonWebTokenError) {
			return res.status(401).send({ error: 'User unauthorised' }).end();
		}
	}

	try {
		const con = await mysql.createConnection(MYSQL_CONFIG);
		const [results] = await con.execute('SELECT * FROM code_academy_practice.groups');
		await con.end();

		return res.status(200).send(results).end();
	} catch (error) {
		res.status(500).send(error).end();
		return console.error(error);
	}
};

export const addNewGroup = async (req, res) => {
	const token = req.headers.authorization?.split(' ')[1];

	let payload = null;

	try {
		payload = jwt.verify(token, jwtSecret);
	} catch (error) {
		if (error instanceof jwt.JsonWebTokenError) {
			return res.status(401).send({ error: error.message }).end();
		}
	}

	const newGroup = mysql.escape(req.body.name?.trim());

	const query = `INSERT INTO code_academy_practice.groups (name) VALUES (${newGroup})`;

	try {
		const con = await mysql.createConnection(MYSQL_CONFIG);

		await con.execute(query);

		await con.end();

		return res.status(200).send({ message: 'Group created succesufully' }).end();
	} catch (error) {
		res.status(500).send(error).end();
		return console.error(error);
	}
};
