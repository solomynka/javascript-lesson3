let products = ['5', 5, '10', 5];

let prodCopy = products.slice(-1);

function lastNumber(array1, array2) {
	console.log(array1.length);
	console.log(array2);
}
lastNumber(products, prodCopy);

console.log('------');

let styles = ['jaz', 'blues'];
styles.push('rock&roll');
console.log(styles);

styles.splice(-2, 1, 'classic');
console.log(styles);

console.log(styles.shift());

styles.unshift('rap', 'reggi');
console.log(styles);

console.log('------');

function find(arr, value) {
	console.log(arr.indexOf(value));
}

find(styles, 'rap');
find(styles, 'rapsss');



