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

console.log(mergeSort([77, 600, 934, 908, 268, 840, 614, 672, 865, 275]));

const randomArray = document.getElementById('random-array-content');
const copyButton = document.getElementById('copy-button');
const randomArrayButton = document.getElementById('random-array-button');
const field = document.getElementById('input-field');
const pasteButton = document.getElementById('paste-button');
const sortButton = document.getElementById('sort-button');
const result = document.getElementById('result');
