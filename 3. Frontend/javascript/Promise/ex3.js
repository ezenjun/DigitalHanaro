import assert, { rejects } from "assert";

const vals = [1, 2, 3];
const randTime = (val) =>
	new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

// const promiseAll = (args) => {
// 	return new Promise((resolve, reject) => {
// 		let final = [];
// 		args.map((each) => {
// 			each
// 				.resolve(each)
// 				.then((res) => {
// 					final.push(res);
// 					if (final.length === args.length) resolve(final);
// 				})
// 				.catch(reject);
// 		});
// 	});
// };

const promiseAll = (args) => {
	return new Promise((resolve, reject) => {
		const final = [];
		let end = 0;

		if (args.length === 0) {
			return resolve(final);
		}

		args.forEach((promise, index) => {
			promise
				.then((value) => {
					final[index] = value;
					end += 1;
					if (end === args.length) {
						resolve(final);
					}
				})
				.catch(reject);
		});
	});
};

const race = (args) => {
	return new Promise((resolve, reject) => {
		const final = [];

		if (args.length === 0) {
			return resolve(final);
		}

		args.forEach((promise) => {
			promise
				.then((value) => {
					final.push(value);
					if (final.length === 1) {
						resolve(final);
					}
				})
				.catch((err) => {
					final.push(err);
					reject(err);
				});
		});
	});
};

const any = (args) => {
	return new Promise((resolve, reject) => {
		const final = [];

		if (args.length === 0) {
			return resolve(final);
		}

		args.forEach((promise) => {
			promise
				.then((value) => {
					final.push(value);
					if (final.length === 1) {
						resolve(final);
					}
				})
				.catch(reject);
		});
	});
};

const allSettled = (promises) => {
	return new Promise((resolve, reject) => {
		const final = [];
		let end = 0;

		if (promises.length === 0) {
			return resolve(final);
		}

		promises.forEach((promise, index) => {
			promise
				.then((value) => {
					final[index] = { status: "fulfilled", value: value };
					if (end === promises.length) {
						resolve(final);
					}
				})
				.catch((err) => {
					final[index] = { status: "rejected", reason: err };
				})
				.finally(() => {
					end++;
					if (end === promises.length) {
						resolve(final);
					}
				});
		});
	});
};

// Promise.race([randTime(1), Promise.reject("Error!"), randTime(2)])
// 	.then(console.table)
// 	.catch(console.error);

// race([randTime(1), Promise.reject("Error!"), randTime(2)])
// 	.then(console.table)
// 	.catch(console.error);

// interface PromiseFulfilledResult<T> {
// 	status: 'fulfilled';
// 	value: T;
// }

// interface PromiseRejectedResult {
// 	status: 'rejected';
// 	reason: any;
// }

// const promiseAll2 = (promises) =>
// 	new Promise((resolve, reject) => {
// 		const results = [];
// 		let cntToRun = promises.length;
// 		for (let i = 0; i < promises.length; i++) {
// 			promises[i]
// 				.then((succ) => {
// 					results[i] = succ;
// 					cntToRun--;
// 					if (cntToRun === 0) resolve(results);
// 				})
// 				.catch(reject);
// 		}
// 	});

// promiseAll([randTime(1), randTime(2), randTime(3)])
// 	.then((arr) => {
// 		console.table(arr);
// 		assert.deepStrictEqual(arr, vals);
// 	})
// 	.catch(console.error);

// promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
// 	.then((array) => {
// 		console.log('여긴 과연 호출될까?!');
// 	})
// 	.catch((error) => {
// 		console.log('reject!!!!!!>>', error);
// 	});

Promise.allSettled([randTime(1), randTime(2), randTime(3)])
	.then((arr) => {
		console.table(arr);
	})
	.catch(console.error);

allSettled([randTime(1), randTime(2), randTime(3)])
	.then((arr) => {
		console.table(arr);
	})
	.catch(console.error);

// promiseAllinOrder([randTime(11), Promise.reject('RRR'), randTime(33)])
// 	.then((array) => {
// 		console.log('여긴 과연 호출될까?!');
// 	})
// 	.catch((error) => {
// 		console.log('reject!!!!!!>>', error);
// 	});

// const afterTime = (sec) =>
// 	new Promise((resolve, reject) => setTimeout(resolve, sec * 1000));

// async function f1() {
// 	const r2 = await afterTime(1);
// 	console.log('🚀  f2  r2:', r2);
// }
// async function f2() {
// 	const r2 = await afterTime(1);
// 	console.log('🚀  f2  r2:', r2);
// 	return r2;
// }

// const rf1 = f1();
// const rf2 = await f2();
// console.log('🚀  rf1 rf2:', rf1, rf2);

// (async () => {
// 	const r3 = await afterTime(1);
// 	console.log('🚀  r3  r3:', r3);
// })();
