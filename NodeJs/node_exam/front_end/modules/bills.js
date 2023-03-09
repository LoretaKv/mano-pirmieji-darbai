const ENDPOINT = 'http://localhost:5004/bills/15';

const renderBills = (bills) => {
	bills.forEach((bills) => {
		const billsContainerElement = document.querySelector('#billsContainer');

		const billContainer = document.createElement('div');

		const billsIdContainer = document.createElement('p');
		billsIdContainer.innerText = bills.group_id;

		const amountContainer = document.createElement('p');
		amountContainer.innerText = bills.amount + '$';

		const descriprionContainer = document.createElement('p');
		descriprionContainer.innerText = bills.description;

		billContainer.append(billsIdContainer, amountContainer, descriprionContainer);

		billsContainerElement.append(billContainer);
	});
};

const getBills = async () => {
	try {
		const response = await fetch(ENDPOINT, {
			headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
		});
		const bills = await response.json();

		if (!response.ok || response.status >= 400) {
			alert({ error: error.message });
		}

		if (response.ok) {
			renderBills(bills);
			return bills;
		}
	} catch (error) {
		console.log(error);
	}
};

getBills();
