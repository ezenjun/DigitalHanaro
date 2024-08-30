// const dog = {
// 	name: 'Maxx',
// 	showMyName() {
// 		console.log(`My name is ${this.name}.`);
// 	},
// 	whatsYourName() {
// 		// console.log(this);
// 		var self = this;
// 		setTimeout(function () {
// 			self.showMyName;
// 		}, 1000);
// 		setTimeout(() => this.showMyName(), 1000);
// 		// 이렇게 하면 되는 이유는 () => this.showMyName() 는 익명의 화살표 함수로 function declaration에 등록된다
// 		// 생성될 당시 env 는 whatsYourName의 내부 블록이다. boundThis가 없기 때문에 화살표 함수로 등록됐을 뿐이다.
// 		// 실행될 때 this 는 부모 스코프의 this 이니까 whatsYourName의 this이다. 즉 dog가 this가 된다.
// 		setTimeout(this.showMyName.bind(this), 1000);
// 		// bind를 했을 때에도 function object에 새로운 binded function object가 들어가기 때문에 새로운 객체를 생성한다는 이유로 위에 보다 아래가
// 		// 낫다는 설명은 틀림. 단, 아래가 더 가볍긴 함
// 	},
// };

// dog.whatsYourName();
// // // 현재 dog는 f.o

// const cat = {
// 	name: 'Maxx',
// 	showMyName() {
// 		return () => console.log(`My name is ${this.name}.`);
// 	},
// 	whatsYourName() {
// 		setTimeout(this.showMyName(), 1000);
// 	},
// };

// cat.whatsYourName();

// globalThis.id = 'Global Id';
// this.id = 'module id';

// const obj = {
// 	id: 123,
// 	f: function () {
// 		console.log('obj > f ', this.id);
// 	},
// 	af: () => console.log('obj > af ', this.id),
// 	subObj: {
// 		id: 999,
// 		f: function () {
// 			console.log('obj > subObj > f ', this.id);
// 		},
// 		af: () => console.log('obj  > subObj > af ', this.id),
// 	},
// };

// obj.f();
// obj.af();
// obj.subObj.f();
// obj.subObj.af();
// var i;
// for (i = 0; i < 5; i += 1) {
// 	// ⇒ ⇒ ⇒
// 	// setTimeout(() => console.log(i), 100); // (다)
// 	setTimeout(console.log, 100, i); // (나) i 는 Bound arguments에 들어간다다
// 	// ⇐⇒ setTimeout((i) => console.log(i), 100);
// }
// console.log('-------------------------------------------------');
// for (let i = 0; i < 5; i += 1) {
// 	// ⇒ ⇒ ⇒
// 	setTimeout(() => console.log(i), 100); // (다)
// 	// setTimeout(console.log, 100, i); // (나)
// 	// ⇐⇒ setTimeout((i) => console.log(i), 100);
// }

// const arr = [1, 2, 3];
// arr.map((a, i, arr) => {
// 	console.log(a, i, arr);
// });

// Array.prototype.map = function (f) {
// 	for (let i = 0; i < this.length; i++) f(i, this[i]);
// };
// arr.map((a, i, arr) => {
// 	console.log(a, i, arr);
// });

// function f(a, b) {
// 	console.log(`${a}+${b}=${a + b}`);
// }
// f(1, 2);
// arr.map(f);

// const f2 =
// 	(f) =>
// 	(...args) =>
// 		console.log(f.name, f(...args));

// f2(Math.max)(1, 3, 2, 5, 4);
// x = f2(Math.max);
// console.log(x);
x;
y;
farr = [x, y];

farr.map((f, i) => f(0.1, 0.2, i));
