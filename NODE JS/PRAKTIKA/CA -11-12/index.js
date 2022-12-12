const express = require('express');
const cors = require('cors');

const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;
const DBCOLLECTIONU = process.env.DBCOLLECTIONU;

app.use(express.json());
app.use(cors());

app.get('/users/:order', async (req, res) => {
	const { userName } = req.params;
	console.log(userName);
	const con = await client.connect();
	const sortedUsers = await con.db(DB).collection(DBCOLLECTIONU).find().sort({ userName }).toArray();

	await con.close();
	return res.send(sortedUsers).end();
});

app.delete('/memberships/:id', async (req, res) => {
	const { id } = req.params;
	console.log(req.params);
	if (!id) {
		res.status(400).send('Id was not provided ').end();
		return;
	}
	try {
		const con = await client.connect();
		const userData = await con
			.db(DB)
			.collection(DBCOLLECTION)
			.deleteOne({ _id: ObjectId(id) });

		await con.close();

		res.send(userData).end();
	} catch ({ error }) {
		res.send(error).end();
		throw Error(error);
	}
});

app.post('/users', async (req, resp) => {
	const newUsers = req.body;
	const areUsersProvided = Array.isArray(newUsers) && newUsers?.length;
	const isCorrectUser = (newUser) => {
		const { userName, userSurname, email, servise_id } = newUser;
	};

	if (!areUsersProvided) {
		return resp.status(400).send('Please provide an array of users').end();
	}
	newUsers.forEach(isCorrectUser);

	try {
		const con = await client.connect();
		const user = await con.db(DB).collection(DBCOLLECTIONU).insertMany(newUsers);

		await con.close();

		return resp.send(user);
	} catch (error) {
		res.status(500).send({ err });
	}
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
