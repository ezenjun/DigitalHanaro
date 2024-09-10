// setTimeout(function () {
// 	console.log('depth1', new Date());
// 	setTimeout(function () {
// 		console.log('depth2', new Date());
// 		setTimeout(function () {
// 			console.log('depth3', new Date());
// 			throw new Error('Already 3-depth!!');
// 		}, 3000);
// 	}, 2000);
// }, 1000);

// const depthTimer = (ms) => {
// 	new Promise((resolve) => setTimeout(resolve, ms));
// };

// console.log('START!', new Date());

// depthTimer(1000)
// 	.then(() => {
// 		console.log('depth1', new Date());
// 		return depthTimer(2000);
// 	})
// 	.then(() => {
// 		console.log('depth2', new Date());
// 		return depthTimer(3000);
// 	})
// 	.then(() => {
// 		console.log('depth3', new Date());
// 		throw new Error('Already 3-depth!!');
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// 강사님
const depthTimer = (depth) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('depth', depth, new Date().getSeconds());
			if (depth >= 3) reject(new Error('Already 3-depth'));
			resolve(depth + 1);
		}, depth * 1000);
	});
depthTimer(1).then(depthTimer).then(depthTimer).catch(console.error);
