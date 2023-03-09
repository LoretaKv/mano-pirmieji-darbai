const ENDPOINT = 'http://localhost:5004/group';

const addNewGroup = document.querySelector('#addGroup');

addNewGroup.addEventListener('submit', async (event) => {
	event.preventDefault();

	const groupNameInput = document.querySelector('#group_name_input').value.trim();

	const group = JSON.stringify({
		name: groupNameInput,
	});

	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: group,
		});

		if (response.ok) {
			addNewGroup.reset();
			window.location.reload();

			alert('Group succesfully added!');
		}

		if (!response.ok || response.status >= 400) {
			return alert({ error: error.message });
		}
	} catch (error) {
		console.log(error);
	}
});
