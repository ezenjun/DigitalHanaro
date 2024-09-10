const promiseFn = (id = 1) =>
	new Promise((resolve, reject) => {
		console.log('id>>', id);
		if (id < 7) resolve(id + 1);
		else reject(new Error('어디로?' + id));
	});

// const promiseFn = (id = 1) =>
// 	new Promise((resolve, reject) => {
// 		console.log('id>>', id);
// 		if (id < 7) resolve(promiseFn(id + 1));
// 		else reject(new Error('어디로?' + id));
// 	});

promiseFn(1)
	.then((res) => {
		console.log('res1>>', res);
		promiseFn(res); // Need Return the Promise Object!!
	})
	.then((res) => {
		return new Promise((resolve, reject) => {
			if (res) resolve(res);
			else reject('ERROR');
		});
	})
	.catch((err) => console.log('Error!!>>', err));

// 강사님
promiseFn(1)
	.then((res) => {
		console.log('res1>>', res);
		promiseFn(res); // Need Return the Promise Object!!
		// if (res instanceof Promise) return res;
		// else return Promise.resolve(res);
		// return Promise.resolve(undefined); // 이게 생략되어있음
	})
	.then((res) => {
		console.log('res2>>', res);
		const error = new Error('xxxxxxx');
		// if (res === undefined) throw new Error('xxxxx');
		return Promise.reject(error);
	})
	.catch((err) => console.log('Error!!>>', err));

// then의 callback 함수에서의 return은 Promise.resolve고, throw는 Promise.reject 이다.
