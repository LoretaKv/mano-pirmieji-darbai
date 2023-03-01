const firstNameInput = document.body.querySelector('#input');
const headingElement = document.body.querySelector('#please');
firstNameInput.addEventListener('input', (event) => {
	const firstName = event.target.value.trim();
	console.log(`${firstName}`);

	headingElement.innerHTML = ` ${firstName}`;
});

const lastNameInput = document.body.querySelector('#lastNameInput');
lastNameInput.addEventListener('input', (event) => {
	const lastName = event.target.value.trim();
	console.log(`${lastName}`);
});

const emailInput = document.body.querySelector('#emailInput');
emailInput.addEventListener('input', (event) => {
	const email = event.target.value.trim();
	console.log(`${email}`);
});

const newUser = JSON.stringify({
	firstUsersName: firstName,
	lastusersName: lastName,
	usersEmail: email,
	// service_id: membershipInputValue,
});
try {
	const myHeaders = new Headers();
	myHeaders.append('Content-type', 'application/json');

	const request = await fetch('http://localhost:5000/user', {
		method: 'POST',
		headers: myHeaders,
		body: newUser,
	});
	return request;
} catch (error) {
	alert(error);
}

document.body.querySelector('#newUsaersForm').addEventListener('submit', async (event) => {
	event.preventDefault();

	// await newUser();
});

export { newUser };
