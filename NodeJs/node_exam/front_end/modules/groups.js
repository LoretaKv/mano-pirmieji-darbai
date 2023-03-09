const ENDPOINT = 'http://localhost:5004/groups';

const renderGroups = (groups) => {
	groups.forEach((group) => {
		const groupsContainerElement = document.querySelector('#output');

		const groupContainer = document.createElement('div');

		const groupNameContainer = document.createElement('h5');
		groupNameContainer.innerText = group.name;

		const groupIdContainer = document.createElement('p');
		groupIdContainer.innerText = 'ID:' + group.id;

		groupContainer.append(groupIdContainer, groupNameContainer);
		groupsContainerElement.append(groupContainer);
	});
};

const getGroups = async () => {
	try {
		const response = await fetch(ENDPOINT, {
			headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
		});
		const groups = await response.json();

		if (!response.ok || response.status >= 400) {
			alert(content.error);
		}

		if (response.ok) {
			renderGroups(groups);
			return groups;
		}
	} catch (error) {
		console.log(error);
	}
};

getGroups();
