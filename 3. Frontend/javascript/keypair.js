// const keyPair = (arr, n) => {
// 	const cache = {};
// 	for (let i = 0; i < arr.length; i += 1) {
// 		const val = arr[i];
// 		if (cache[val]) {
// 			return [cache[val], i];
// 		}
// 		cache[n - val] = i;
// 	}
// };

const keyPair = (arr, n) => {
	// {짝이 되는 값}
	const cache = {};
	for (let i = 0; i < arr.length; i += 1) {
		const val = arr[i];
		if (cache[val]) {
			return [cache[val], i];
		}
		cache[n - val] = i;
	}
};

const k1 = keyPair([1, 3, 4, 5], 7);
console.log('🚀  k1:', k1);
