const assert = require('assert');
const {
	bubbleSort,
	insertionSort,
	quickSort,
	selectionSort
} = require('../algorithms/sort/index.js');

let arr = [];
for(var i = 0; i < 10; i++){
	arr[i] = Math.floor(Math.random() * 100);
}
let sortedArr = arr.slice();
sortedArr.sort((a, b) => {
	return a - b;
});

describe(`Sort: [${arr}]`, () => {
	describe('.bubbleSort()', () => {
		let arr2 = bubbleSort(arr.slice());
		it(`result: [${arr2}]`, () => {
			assert.deepEqual(arr2, sortedArr);
		});
	});

	describe('.insertionSort()', () => {
		let arr2 = insertionSort(arr.slice());
		it(`result: [${arr2}]`, () => {
			assert.deepEqual(arr2, sortedArr);
		});
	});

	describe('.quickSort()', () => {
		let arr2 = quickSort(arr.slice());
		it(`result: [${arr2}]`, () => {
			assert.deepEqual(arr2, sortedArr);
		});
	});

	describe('.selectionSort()', () => {
		let arr2 = selectionSort(arr.slice());
		it(`result: [${arr2}]`, () => {
			assert.deepEqual(arr2, sortedArr);
		});
	});
});
