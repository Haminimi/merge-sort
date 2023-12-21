//Merge Sort Algorithm
function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		const halfIndex = Math.floor(array.length / 2);

		const leftPart = array.slice(0, halfIndex);
		const rightPart = array.slice(halfIndex);

		const leftResult = mergeSort(leftPart);
		const rightResult = mergeSort(rightPart);

		return merge(leftResult, rightResult);
	}
}

function merge(leftPart, rightPart) {
	let result = [];
	let i = 0;
	let j = 0;

	while (i < leftPart.length && j < rightPart.length) {
		if (leftPart[i] < rightPart[j]) {
			result.push(leftPart[i]);
			i++;
		} else if (rightPart[j] < leftPart[i]) {
			result.push(rightPart[j]);
			j++;
		}
	}

	while (i < leftPart.length) {
		result.push(leftPart[i]);
		i++;
	}

	while (j < rightPart.length) {
		result.push(rightPart[j]);
		j++;
	}

	return result;
}

const randomArray = document.getElementById('random-array-content');
const copyButton = document.getElementById('copy-button');
const randomArrayButton = document.getElementById('random-array-button');
const field = document.getElementById('input-field');
const pasteButton = document.getElementById('paste-button');
const sortButton = document.getElementById('sort-button');
const result = document.getElementById('result');

randomArrayButton.addEventListener('click', () => {
	const randomArray = generateRandomArray();
	showRandomArray(randomArray);
});

function generateRandomArray() {
	const resultArray = [];
	for (let i = 0; i < 10; i++) {
		resultArray.push(Math.floor(Math.random() * 1000) + 1);
	}

	return resultArray;
}

function showRandomArray(array) {
	randomArray.textContent = array.join(', ');
}

function copyToClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log('Text successfully copied to clipboard:', text);
		})
		.catch((err) => {
			console.log('Unable to copy text to clipboard:', err);
		});
}

copyButton.addEventListener('click', () => {
	copyToClipboard(randomArray.textContent);
});

sortButton.addEventListener('click', (event) => {
	event.preventDefault();
	const array = transformArray([field.value]);
	const result = mergeSort(array);
	field.value = '';
	showResult(result);
});
