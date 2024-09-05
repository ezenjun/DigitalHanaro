import assert from 'assert';
// function push(array, …args) {}

const arr = [1, 2, 3, 4];

// push
const push = (arr, ...args) => {
	return [...arr, ...args];
};

const pop = (arr, idx = 1) =>
	idx === 1 ? arr.slice(-idx)[0] : arr.slice(-idx);

// unshift
const unshift = (arr, ...args) => [...args, ...arr];

//shift
const shift = (arr, idx = 1) => arr.slice(idx);

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
