//Validate zipcode
export function isValidZip(zip) {
	return /^\d{5}(-\d{4})?$/.test(zip)
}

//Display Alert message
export function showAlert(message, className) {
	//Create div
	const div = document.createElement('div');
	//Add classes
	div.className = `alert alert-${className}`;
	//Add text
	div.appendChild(document.createTextNode(message))
	//Get Container
	const container = document.querySelector('.container')
	//Get form
	const form = document.querySelector('#pet-form');
	//Insert alert
	container.insertBefore(div, form);

	setTimeout(() => document.querySelector('.alert').remove(), 2500)
}