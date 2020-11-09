const users = [
	{
		name: 'Lisa',
		surname: 'Nikon',
		age: 18,
		mark: 5.7
	},
	{
		name: 'Leo',
		surname: 'Laund',
		age: 18,
		mark: 5.7
	},
	{
		name: 'Jesse',
		surname: 'Spenser',
		age: 21,
		mark: 6.7
	},
	{
		name: 'Henri',
		surname: 'House',
		age: 19,
		mark: 8
	},
	{
		name: 'Laura',
		surname: 'Newman',
		age: 18,
		mark: 5
	},
	{
		name: 'Sara',
		surname: 'Konan',
		age: 20,
		mark: 4.8
	},
	{
		name: 'Kody',
		surname: 'Jonth',
		age: 19,
		mark: 6
	},
	{
		name: 'John',
		surname: 'Lonh',
		age: 20,
		mark: 6.3
	},
];

const table = document.getElementById('table');

function renderTable(table, array) {
	const tr = document.createElement('tr');

	array.forEach((item) => {
		const values = Object.values(item);

		values.forEach((value) => {
			const td = document.createElement('td');
			td.textContent = value;
			tr.appendChild(td);
		});
	});

	table.appendChild(tr);
}

renderTable(table, users);
function getAverageMark(users) {
	const sum = users.reduce((acc, user) => acc += user.mark, 0);
	return sum / users.length;
}
alert(getAverageMark(users));