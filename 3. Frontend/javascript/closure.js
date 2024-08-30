// // let userFn;
// // {
// // 	const privateUser = { id: 1, name: 'Hong' };
// // 	userFn = () => privateUser; // 이 user 변수가 하위(Block) 스코프의 privateUser를 참조
// // }

// // userFn().age = 30; // user refer to privateUser ⇒ 실제로 privateUser가 변경!
// // console.log(userFn());

// function counter() {
// 	let count = 0;
// 	return function X() {
// 		count += 1;
// 		return count;
// 	};
// }
// const counter1 = counter();
// // counter.count 를 하면 함수 타입에서 Object type으로 implicit coertion이 되어 undefined 로 나오게 된다

// const counter2 = counter();
// console.log(counter()); // 1
// console.log(counter1()); // 2
// console.log(counter2()); // 1

// function discount() {
// 	let dcRate = 0.1;
// 	return function (price) {
// 		// 내부함수(:외부에서 dcRate 참조 가능하도록하는 함수를 반환)
// 		return price * dcRate; // dcRate를 외부에서 직접 접근 못하지만 이 함수는 가능
// 	};
// }

// const items = [
// 	{ item: '상품 A', price: 32000 },
// 	{ item: '상품 B', price: 45000 },
// ];
// const dc = discount();
// for (const { item, price: orgPrice } of items) {
// 	const salePrice = orgPrice - dc(orgPrice); // 실제 판매 금액
// 	console.log(`${item}: ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
// }

// function currentCount() {
// 	let currCount = 0; // private variable
// 	return {
// 		connect() {
// 			currCount += 1;
// 		},
// 		disconnect() {
// 			currCount -= 1;
// 		},
// 		getCount() {
// 			return currCount;
// 		}, // getter method
// 		get count() {
// 			return currCount;
// 		}, // readonly getter (accessor)
// 	};
// }

// const actions = ['입장', '입장', '입장', '퇴장', '입장', '퇴장']; // Status Queue

// const counter = currentCount();
// for (const action of actions) {
// 	action === '입장' ? counter.connect() : counter.disconnect();
// 	console.log(`${action} -> 현재 입장객:  ${counter.count} 명`);
// }
// console.log('Current User Count=', counter.count);

let sum = 0;
for (let i = 0; i <= 100; i += 1) {
	sum += i;
}
console.log(sum);

function addTo100(a) {
	if (a === 100) return 100;
	return a + addTo100(a + 1);
}
console.log(addTo100(1));

function addTo100TCO(a, sum = 0) {
	if (a >= 101) return sum;
	return addTo100TCO(a + 1, (sum += a));
}
// addTo100TCO(1);
console.log('🚀  addTo100TCO(1):', addTo100TCO(1));

// 내코드
function makeArray(n) {
	if (n <= 0) return [];
	const rest = makeArray(n - 1);
	return [...rest, n];
}
console.log(makeArray(10));
//강사님 코드
function makeArray2(n) {
	if (n === 1) return [1];
	return [...makeArray2(n - 1), n];
}
console.log('🚀  makeArray(10):', makeArray2(10));

function reverseArray(n) {
	if (n <= 0) return [];
	const rest = reverseArray(n - 1);
	return [n, ...rest];
}

console.log(reverseArray(10));

//강사님 코드
function reverseArray(n) {
	if (n === 1) return [1];
	return [n, ...reverseArray(n - 1)];
}

console.log('🚀  reverseArray(10):', reverseArray(10));

function addTo100TCO(a, sum = 0) {
	if (a >= 101) return sum;
	return addTo100TCO(a + 1, (sum += a));
}

// 내코드
function makeArrayTCO(n, arr = []) {
	if (n <= 0) return arr;
	return makeArrayTCO(n - 1, [n, ...arr]);
}
console.log('🚀  makeArrayTCO(10):', makeArrayTCO(10));

function makeArrayTCO2(n, acc = []) {
	const t = [n, ...acc];
	if (n === 1) return t;
	return makeArrayTCO2(n - 1, t);
}
console.log('🚀  makeArrayTCO(10):', makeArrayTCO2(10));
	