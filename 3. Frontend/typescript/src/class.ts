// import assert from "assert";

// declare global {
// 	interface Array<T> {
// 		first(): T;
// 		mapBy: (value: T, index: number, array: T[]) => any;
// 		filterBy: (
// 			value: T,
// 			index: number,
// 			isIncludes: boolean,
// 			array: T[]
// 		) => any;
// 		rejectBy: (prop: string) => any;
// 		findBy: (prop: string) => any;
// 		sortBy: (prop: string) => any;
// 	}
// }

// Object.defineProperties(Array.prototype, {
// 	firstObject: {
// 		get() {
// 			return this[0];
// 		},
// 		set(value) {
// 			this[0] = value;
// 		},
// 	},
// 	lastObject: {
// 		get() {
// 			return this.at([-1]);
// 		},
// 		set(value) {
// 			this[this.length - 1] = value;
// 		},
// 	},
// });

// // ----------------------------------------------------
// Array.prototype.mapBy = function (prop) {
// 	return this.map((a) => a[prop]);
// };

// // ----------------------------------------------------
// Array.prototype.filterBy = function (prop, value, isIncludes = false) {
// 	const cb = isIncludes
// 		? this.filter((a) => a[prop]?.isIncludes(value))
// 		: this.filter((a) => a[prop] === value);
// 	return this.filter(cb);
// };

// // ----------------------------------------------------
// Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
// 	const cb = isIncludes
// 		? this.filter((a) => !a[prop]?.includes(value))
// 		: this.filter(a[prop] !== value);
// 	return this.filter(cb);
// };

// // ----------------------------------------------------
// Array.prototype.findBy = function (prop, value) {
// 	return this.filter(function (i) {
// 		return i[prop] === value;
// 	})[0];
// };

// // ----------------------------------------------------
// Array.prototype.sortBy = function (f) {
// 	const key = f.split(":")[0];
// 	const direction = f.split(":")[1];
// 	return this.sort(function (a, b) {
// 		if (a[key] < b[key]) return direction === "desc" ? 1 : -1;
// 		if (a[key] > b[key]) return direction === "desc" ? -1 : 1;
// 		return 0;
// 	});
// };
