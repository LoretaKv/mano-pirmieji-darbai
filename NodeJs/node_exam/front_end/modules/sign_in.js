const signInForm = document.querySelector('#sign-in_form');

signInForm.addEventListener('submit', async (event) => {
	event.preventDefault();

	const user_email = document.querySelector('#user_email').value.trim();
	const user_password = document.querySelector('#user_password').value;

	try {
		const response = await fetch('http://localhost:5004/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: user_email, password: user_password }),
		});

		const authData = await response.json();

		if (!response.ok || response.status >= 400) {
			return alert(authData?.error || response.statusText);
		}
		localStorage.setItem('accessToken', authData.accessToken);

		if (response.ok) {
			window.location.assign(`./groups.html`);
		}
	} catch (error) {
		return console.error(error);
	}
});

const signUpNavigation = document.querySelector('#signInLine');

signUpNavigation.addEventListener('click', (event) => {
	event.preventDefault();
	window.location.assign(`./register.html`);
});
