let string = 'my-short-string';

function camelize(str) {
	let arr = str.split('-s');

	console.log(arr.join('S'));
}
camelize(string);

console.log('------');

let number = [2, 2, 3, 5, 6, 7, 10];

function filterRange(array, a, b) {

	let newArr = [];
	if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
		console.log('Невірно введені числа');
	} else {
		for (var i = 0; i < array.length; i++) {
			if ((array[i] >= a) & (array[i] <= b)) {
				newArr = array.slice(a, b + 1);
			}
		}
		console.log(newArr);
	}

}

filterRange(number, 2, 5);
filterRange(number, -1, 1);

