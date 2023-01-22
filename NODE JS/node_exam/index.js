import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { registerNewUser } from './src/services/new_user.js';
import { logIn } from './src/models/login.js';
import { addNewGroup, getGroups } from './src/controllers/groups.js';
import { assignUser, getAccounts } from './src/controllers/accounts.js';
import { addBill, getBills } from './src/controllers/bills.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', registerNewUser);
app.post('/login', logIn);
app.get('/groups', getGroups);
app.post('/group', addNewGroup);
app.post('/accounts', assignUser);
app.get('/accounts', getAccounts);
app.post('/bills', addBill);
app.get('/bills/:group_id', getBills);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
