// const once = (fn, delay = 1000) => {
// 	let hasBeenCalled = false;
// 	return (...args) => {
// 		if (!hasBeenCalled) {
// 			hasBeenCalled = true;
// 			setTimeout(() => {
// 				hasBeenCalled = false;
// 			}, delay);
// 			return fn(...args);
// 		}
// 		return undefined;
// 	};
// };

// function fivePart(x, y) {
// 	console.log('fivePart', this);

// 	return `fivePart ${x}, ${y}, id: ${this.id}`;
// }
// const fn = once2(fivePart.bind({ id: 11 }));
// console.log(fn(1, 2));
// const fn2 = once2(fivePart);
// console.log(fn2.bind({ id: 22 })(3, 4)); // 새로운 bound function object 생성

// function once2(f, rebirthDelay = 1000) {
// 	let done = false;
// 	console.log('once2', this);

// 	return function (...args) {
// 		if (done) return;
// 		done = true;
// 		setTimeout(() => (done = !done), rebirthDelay);
// 		console.log('function', this);
// 		return f.bind(this)(...args);
// 		// return f.apply(this, args);
// 		// return f.call(this, ...args);
// 	};
// }

// // const maxRunCnt = 20;
// // let runCnt = 0;

// const fn2 = once2(
// 	(x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`,
// 	2000
// );
// setInterval(() => console.log(fn(1, 6)), 500);
// // console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
// // console.log(fn(2, 7)); // undefined
// // console.log(fn(3, 8)); // undefined
// fn(1, 6);

// function fivePart(x, y) {
// 	return `fivePart ${x}, ${y}, id: ${this.id}`;
// }
// const fn1 = once(fivePart.bind({ id: 11 }));
// console.log(fn1(1, 2));
// const fn2 = once(fivePart.bind({ id: 22 }));

// console.log('---------------------------------------------');

// const before = () => console.log('before....');
// const after = () => console.log('after...');

// const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
// const someFn2 = (id, nickname, email, level) =>
// 	console.log(`${id}/${nickname}/${email}/${level}`);

// const template = (fn) => {
// 	return (...args) => {
// 		// console.log(...args);
// 		// console.log(fn);
// 		before();
// 		fn(...args);
// 		after();
// 	};
// };

// const temp = template(someFn); // before → someFn → after 실행
// const temp2 = template(someFn2); // before → someFn2 → after 실행

// temp('sico', 'hello');

// console.log('--------------');
// temp2(1, 'sico', 'sico@gmail.com', 5);
// console.log('---------------------------------------------');
// console.log('square of 7 =', template((n) => n ** 2)(7));
// console.log('---------------------------------------------');

const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = (() => {
	// console.log(this);
	let widx = -1;
	console.log('outside', widx);
	return () => {
		widx += 1;
		console.log('inside', widx);
		if (widx >= weeks.length) widx = 0;
		return `${weeks[widx]}요일`;
	};
})();

let cnt = 0;
const intl = setInterval(() => {
	let widx = -1;
	widx += 2;
	console.log('call', cnt, getNextWeek());
	if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
console.log('final', widx);

// setTimeout(() => {
// 	console.log('after 15 sec', widx);
// 	// clearInterval();
// }, 10000);

// const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// let widx = -1;
// const getNextWeek = () => {
// 	widx += 1; // side-effect!
// 	if (widx >= weeks.length) widx = 0;
// 	return `${weeks[widx]}요일`;
// };

// let cnt = 0;
// const intl = setInterval(() => {
// 	// widx += 2; // side-effect!
// 	console.log('call', cnt, getNextWeek());
// 	if ((cnt += 1) === 8) clearInterval(intl);
// }, 1000);
