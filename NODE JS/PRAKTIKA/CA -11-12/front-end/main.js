import { getUsers } from './modules/getUsers.js';
import { newUser } from './modules/renderNewUser.js';
await newUser();
const handleFormSubmit = async (event) => {
	event.preventDefault();
	document.querySelector('#btn').style.visibility = 'hidden';
	await getUsers();
};
document.querySelector('#btn').addEventListener('click', handleFormSubmit);
