import assert from 'assert';

// const promiseAll = async (promises) => {
// 	const result = [];

// 	if (promises.length === 0) {
// 		return result;
// 	}

// 	try {
// 		for (let i = 0; i < promises.length; i++) {
// 			result[i] = await promises[i];
// 		}
// 		return result;
// 	} catch (error) {
// 		throw error;
// 	}
// };

const promiseAll = async (promises) => {
	const results = [];
	let idx = 0;
	for await (const promise of promises) {
		results[idx++] = promise.catch((err) => err);
	}
	return results;
};

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

const vals = [1, 2, 3];
const randTime = (val) =>
	new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

promiseAll([randTime(1), randTime(2), randTime(3)])
	.then((arr) => {
		console.table(arr);
		assert.deepStrictEqual(arr, vals);
	})
	.catch(console.error);

promiseAll([randTime(11), randTime(22), randTime(33)])
	.then((array) => {
		console.log('여긴 과연 호출될까?!');
	})
	.catch((error) => {
		console.log('reject!!!!!!>>', error);
	});




const getUserPosts = async userId =>{
    const {id, name} = await myFetch(`users/${suerlajelksdcj l}`)
}