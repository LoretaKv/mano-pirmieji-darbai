import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { jwtSecret, MYSQL_CONFIG } from '../../config.js';
import dotenv from 'dotenv';

dotenv.config();

export const assignUser = async (req, res) => {
	const token = req.headers.authorization?.split(' ')[1];

	let payload = null;

	try {
		payload = jwt.verify(token, jwtSecret);
	} catch (error) {
		if (error instanceof jwt.JsonWebTokenError) {
			return res.status(401).send({ error: error.message }).end();
		}
	}

	const group_id = +mysql.escape(req.params.group_id).replaceAll("'", '');

	if (!group_id || !user_id) {
		return res.status(400).send({ error: 'Incorrect id`s provided!' }).end();
	}
	// if (typeof group_id !== 'number' || typeof user_id !== 'number') {
	// 	return res.status(400).send({ error: 'Please insert id as a nunumber!' }).end();
	// }

	try {
		const con = await mysql.createConnection(MYSQL_CONFIG);

		await con.execute(`INSERT INTO code_academy_practice.accounts (group_id,user_id) VALUES (${group_id},${user_id})`);
		await con.end();

		return res.status(200).send({ message: 'User Assigned succesfully!' }).end();
	} catch (error) {
		res.status(500).send(error).end();
		return console.error(error);
	}
};

const TOKEN_START = 'Bearer ';

export const getAccounts = async (req, res) => {
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
		const [results] = await con.execute(
			'SELECT code_academy_practice.accounts.group_id,code_academy_practice.groups.id FROM code_academy_practice.accounts INNER JOIN code_academy_practice.groups ON code_academy_practice.accounts.group_id=code_academy_practice.groups.id '
		);

		await con.end();

		return res.status(200).send(results).end();
	} catch (error) {
		res.status(500).send(error).end();
		return console.error(error);
	}
};
