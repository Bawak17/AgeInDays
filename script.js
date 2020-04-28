//Age in Days

function ageInDays() {
	let birthYear = prompt("Enter year you were born my friend...");
	let ageInDayss = (2020 - birthYear) * 365;
	let h1 = document.createElement('h1');
	let textAnswer = document.createTextNode('You are ' + ageInDayss + ' old in days');
	h1.setAttribute('id', 'ageInDays');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
	document.getElementById('ageInDays').remove();
}