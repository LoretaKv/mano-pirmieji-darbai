const showUsers = (users) => {
	users.forEach((user) => {
		const usersContainerElement = document.querySelector('#output');
		const usersContainer = document.createElement('div');
		const firstName = document.createElement('p');
		const lastName = document.createElement('p');
		const userEmail = document.createElement('p');

		firstName.innerText = 'First Name:' + user.userName;
		console.log(firstName);
		lastName.innerText = 'Surname:' + user.userSurname;
		userEmail.innerText = 'Email:' + user.email;

		usersContainer.append(firstName, lastName, userEmail);
		usersContainerElement.append(usersContainer);
	});
};
export { showUsers };
