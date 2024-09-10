// const f = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users/1');

// 	if (!res.ok) throw new Error('Failt to Fetch!!');

// 	// <2초 sleep(block)하도록 이 부분을 작성해 보세요!>
// 	await new Promise((resove) => setTimeout(resolve, 2000));

// 	const data = await res.json();

// 	return data.name;
// };

// console.log(await f());

// async function sleep(n) {
// 	await new Promise((resolve) => setTimeout(resolve, n * 1000));
// }

// const promiseAll = (args) => {
// 	return new Promise((resolve, reject) => {
// 		const final = [];
// 		let end = 0;

// 		if (args.length === 0) {
// 			return resolve(final);
// 		}

// 		args.forEach((promise, index) => {
// 			promise
// 				.then((value) => {
// 					final[index] = value;
// 					end += 1;
// 					if (end === args.length) {
// 						resolve(final);
// 					}
// 				})
// 				.catch(reject);
// 		});
// 	});
// };

const promiseAll = async (args) => {
	const result = [];

	if (args.length === 0) {
		return result;
	}

	for (let i = 0; i < args.length; i++) {
		try {
			result[i] = await args[i];
		} catch (error) {
			throw error;
		}
	}

	return result;
};

const vals = [1, 2, 3];
const randTime = (val) =>
	new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

promiseAll([randTime(1), randTime(2), randTime(3)])
	.then((arr) => {
		console.table(arr);
		assert.deepStrictEqual(arr, vals);
	})
	.catch(console.error);

promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
	.then((array) => {
		console.log('여긴 과연 호출될까?!');
	})
	.catch((error) => {
		console.log('reject!!!!!!>>', error);
	});
