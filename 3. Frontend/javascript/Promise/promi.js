const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('waited 1sec');
		resolve('OK');
		reject('Error');
	}, 1000);
});

// console.log('p=', p.then(console.log(p)));
p.then((succResult) => {
	console.log('🚀  succResult:', succResult, p);
}).catch((error) => console.log('🚀  error:', error));

const ppp = p
	.then((succResult) => {
		console.log(succResult, p);
		return new Promise((resolve) => resolve('OKPPP'));
	})
	.then((y) => {
		console.log('y', y);
		return 'zzz';
	});
ppp.then((x) => console.log('ppp.x= ', x));
p.then((x) => console.log('p.x', x));
