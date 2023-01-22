import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { jwtSecret, MYSQL_CONFIG } from '../../config.js';
import dotenv from 'dotenv';

dotenv.config();

export const addBill = async (req, res) => {
	const token = req.headers.authorization?.split(' ')[1];

	let payload = null;

	try {
		payload = jwt.verify(token, jwtSecret);
	} catch (error) {
		if (error instanceof jwt.JsonWebTokenError) {
			return res.status(401).send({ error: error.message }).end();
		}
	}

	const amount = mysql.escape(req.body.amount);
	const group_id = mysql.escape(req.body.group_id);
	const description = mysql.escape(req.body.description?.trim());

	const query = `INSERT INTO code_academy_practice.bills (group_id,amount,description) VALUES (${group_id},${amount},${description})`;

	try {
		const con = await mysql.createConnection(MYSQL_CONFIG);

		await con.execute(query);

		await con.end();

		return res.status(200).send({ message: 'Bill added succesufully' }).end();
	} catch (error) {
		res.status(500).send(error).end();
		return console.error(error);
	}
};

const TOKEN_START = 'Bearer ';

export const getBills = async (req, res) => {
	let token = req.headers.authorization;

	const id = mysql.escape(req.params.group_id.trim());
	const groupId = +id.replaceAll("'", '');

	if (!token?.startsWith(TOKEN_START)) {
		return res.status(403).send('Token is not a valid Bearer token').end();
	}

	token = token.replace('Bearer ', '');

	let payload = null;

	if (!token) {
		return res.status(401).send({ error: error.message }).end();
	}

	try {
		payload = jwt.verify(token, jwtSecret);
	} catch (err) {
		if (err instanceof jwt.JsonWebTokenError) {
			return res.status(401).send({ error: 'User unauthorised' }).end();
		}

		return res.status(400).end();
	}

	try {
		const con = await mysql.createConnection(MYSQL_CONFIG);
		const [result] = await con.execute(`SELECT * FROM code_academy_practice.bills WHERE group_id=${groupId}`);

		await con.end();

		if (groupId <= 0 || groupId.lenght === 0 || typeof groupId !== 'number') {
			return res.status(200).send({ message: 'Incorrect Id Provided!' }).end();
		}

		return res.status(200).send(result).end();
	} catch (error) {
		res.status(500).send(error).end();
		return console.error(error);
	}
};
