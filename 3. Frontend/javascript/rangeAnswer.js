import assert from 'assert';

const range = (s, e, step = s > e ? -1 : 1) => {
	if (step === 0 || s === e) return [s];

	if ((s - e) * step > 0) {
		return [];
	}

	// if (e === undefined) {
	// 	if (s > 0) {
	// 		e = s;
	// 		s = 1;
	// 	} else if (start < 0) {
	// 		end -= 1;
	// 	} else {
	// 		end = 0;
	// 	}
	// }

	let tmp = s;
	e = e ?? (s > 0 ? ((s = 1), tmp) : s < 0 ? -1 : 0);
	// e = e ?? (s > 0 ? ((s = 1), tmp) : s % 2);

	const results = [];
	for (let i = s; s > e ? i >= e : i <= e; i += step) {
		results.push(i);
	}
	return results;
};

// * rule f(s, e, step)
//  - step 기본값 = s > e ? -1 : 1
//  - step === 0 || s === e ? [s]
//  - e 가 없다면,
//   ⇒ s > 0 ? e = s, s = 1
//   ⇒ s < 0 ? e = -1
//   ⇒ s === 0 ? [0]
// - 비정상
//   ⇒ s > e && step > 0 ? []
//   ⇒ s < e && setp < 0 ? []
//   즉, (s - e) * step > 0

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);
assert.deepStrictEqual(range(-2, 0), [-2, -1, 0]);
assert.deepStrictEqual(range(-2), [-2, -1]);
assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
	range(50),
	Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
	range(1, 150, 3),
	Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
