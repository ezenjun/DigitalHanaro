import assert from "assert";

Object.defineProperties(Array.prototype, {
	firstObject: {
		get() {
			return this[0];
		},
		set(value) {
			this[0] = value;
		},
	},
	lastObject: {
		get() {
			return this.at([-1]);
		},
		set(value) {
			this[this.length - 1] = value;
		},
	},
});

// ----------------------------------------------------
Array.prototype.mapBy = function (prop) {
	return this.map((a) => a[prop]);
};

// ----------------------------------------------------
Array.prototype.filterBy = function (prop, value, isIncludes = false) {
	const cb = isIncludes
		? this.filter((a) => a[prop]?.isIncludes(value))
		: this.filter(a[prop] === value);
	return this.filter(cb);
};

// ----------------------------------------------------
Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
	const cb = isIncludes
		? this.filter((a) => !a[prop]?.includes(value))
		: this.filter(a[prop] !== value);
	return this.filter(cb);
};

// ----------------------------------------------------
Array.prototype.findBy = function (prop, value) {
	return this.filter(function (i) {
		return i[prop] === value;
	})[0];
};

// ----------------------------------------------------
Array.prototype.sortBy = function (f) {
	const key = f.split(":")[0];
	const direction = f.split(":")[1];
	return this.sort(function (a, b) {
		if (a[key] < b[key]) return direction === "desc" ? 1 : -1;
		if (a[key] > b[key]) return direction === "desc" ? -1 : 1;
		return 0;
	});
};

const nullArr = undefined;
nullArr?.mapBy("id");

const arr = [1, 2, 3, 4, 5]; // arr.firstObject; // 1    arr.lastObject; // 5
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

// assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
// arr.firstObject = 100;
// arr.lastObject = 500;
// assert(assert.deepStrictEqual([arr.firstObject, arr.lastObject], [100, 500]));

// assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
// assert.deepStrictEqual(users.mapBy('name'), ['Hong', 'Lee', 'Kim']);
// assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
// assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
// assert.deepStrictEqual(users.firstObject, hong);
// assert.deepStrictEqual(users.lastObject, kim);
// users.lastObject = lee;
// assert.deepStrictEqual(users.firstObject, lee);
// users.lastObject = hong;
// assert.deepStrictEqual(users.lastObject, hong);
