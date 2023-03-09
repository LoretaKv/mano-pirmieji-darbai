const registerForm = document.querySelector('#sign_up_form');

registerForm.addEventListener('submit', async (event) => {
	event.preventDefault();

	const nameInput = document.querySelector('#name_input').value.trim();
	const surnameInput = document.querySelector('#surname_input').value.trim();
	const emailInput = document.querySelector('#email_input').value.trim();
	const firstpasswordInput = document.querySelector('#password_input').value.trim();
	const reapetedPaswordInput = document.querySelector('#reapeat_password_input').value.trim();

	if (firstpasswordInput !== reapetedPaswordInput) {
		return alert('Passwords doesn`t match!');
	}

	const newUser = JSON.stringify({
		name: nameInput,
		surname: surnameInput,
		email: emailInput,
		password: firstpasswordInput,
	});

	try {
		const response = await fetch('http://localhost:5004/register', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: newUser,
		});

		if (response.ok) {
			registerForm.reset();

			alert('Registered Succesfully');

			window.location.assign(`./sign_in.html`);
		}

		if (!response.ok || response.status >= 400) {
			const data = await response.json();
			alert(data.error);
		}
	} catch (error) {
		console.log(error);
	}
});

const signUpNavigation = document.querySelector('#signUp');

signUpNavigation.addEventListener('click', (event) => {
	event.preventDefault();
	window.location.assign(`./sign_in.html`);
});
