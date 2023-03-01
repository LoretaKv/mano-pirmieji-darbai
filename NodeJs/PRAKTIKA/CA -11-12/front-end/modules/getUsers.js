const ENDPOINT = 'http://localhost:5000/users/order';

import { showUsers } from './showUsers.js';

const getUsers = async () => {
	try {
		const response = await fetch(ENDPOINT);
		const users = await response.json();
		showUsers(users);
		return users;
	} catch (error) {
		console.error(error);
	}
};
export { getUsers };
