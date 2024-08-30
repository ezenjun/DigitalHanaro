const arr = [100, 200, 300, 400, 500, 600, 700];
for (const k in arr) {
	console.log(k, ':', arr[k]);
}

const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false };
for (const k in obj) {
	console.log(k, ':', obj[k]);
}
for (const val of Object.values(obj)) {
	console.log(val);
}

// Object.defineProperty(obj, 'level', {
// 	enumerable: false,
// });
// console.log(obj);
// Object.defineProperty(obj, 'role', {
// 	writable: false,
// });

Object.freeze(obj, 'role');
console.log(Object.getOwnPropertyDescriptors(obj));

// const addTax = (resolve) => {
// 	return (price) => {
// 		return resolve(price * 1.1);
// 	};
// };

const addTax1 = function (resolve) {
	return function (price) {
		return resolve(price * 1.1);
	};
};
//        ||
const addTax2 = (resolve) => {
	return (price) => {
		return resolve(price * 1.1);
	};
};
//        ||
const addTax3 = (resolve) => (price) => resolve(price * 1.1);

globalThis.id = 100;
this.id = 900;
const obj2 = {
	id: 1,
	f1: function () {
		console.log('f1>>', this.id);
	},
	f2: () => {
		console.log('f2>>', this.id); // 화살표 함수를 갖고 있는 객체의 this
	},
};

(function () {
	console.log(this); // global object
});
obj2.f1(); // f1.bind(obj)();
obj2.f2(); // f2.bind(obj)(); -> 화살표 함수는 this를 가지지 못하기 때문에 bind를 할 수가 없다.

const of1 = obj2.f1;
const of2 = obj2.f2;
of1(); // 메소드의 호출이 아니라 function object의 호출이다 즉 this가 없다 메소드를 통해 불러야 바인딩이 되는데 function object의 호출이기 때문에 this가 존재하지 않는다.
// bind가 되지 않았으면 global object를 바라보고 있기 때문에 globalThis.id = 100; 를 출력하게 된다
of2();
// globalThis.name = 'Global Name';

// const obj3 = {
// 	name: 'Obj Name',
// 	printName() {
// 		console.log(this.name);
// 	},
// };

// const printName = obj3.printName;
// obj3.printName(); // printName.bind(obj)();
// printName(); // 바인딩이 되지 않은 function object 이기 때문에 Global Name이 나온다.
