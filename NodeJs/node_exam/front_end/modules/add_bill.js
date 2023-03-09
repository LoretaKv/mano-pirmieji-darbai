const ENDPOINT = 'http://localhost:5004/bills';

const addNewBill = document.querySelector('#addBill');

addNewBill.addEventListener('submit', async (event) => {
	event.preventDefault();

	const groupIdInput = document.querySelector('#group_id_input').value.trim();
	const amountInput = document.querySelector('#bill_amount_input').value.trim();
	const descriptionInput = document.querySelector('#bill_description_input').value.trim();

	const bill = JSON.stringify({
		group_id: groupIdInput,
		amount: amountInput,
		description: descriptionInput,
	});

	if (!groupIdInput || !amountInput || !descriptionInput) {
		alert({ error: 'Incorect data provided' });
	}

	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: bill,
		});

		if (response.ok) {
			addNewBill.reset();
			window.location.reload();

			alert('Bill succesfully added!');
		}

		if (!response.ok || response.status >= 400) {
			return alert({ error: error.message });
		}
	} catch (error) {
		console.log(error);
	}
});
