globalThis.name = 'GlobalName';
this.name = 'ModuleName';

// // const obj = {
// // 	name: 'ObjName',
// // 	bark1: function () {
// // 		console.log('1=', this.name);
// // 		const self = this; // OLD version
// // 		setTimeout(
// // 			function tf() {
// // 				// this가 timeout이라는 객체 이다.
// // 				console.log('11=', self.name); // this가 obj 이기 때문에 obj.name이 출력
// // 				console.log('idleTimeout 12=', this); // Timeout  // 이벤트 루프로 task queue에 들어갈 때 this를 timeout으로 지정해버린다.
// // 			}.bind(this), // 이 this 는 obj이다.
// // 			1000
// // 		); // .bind(this)
// // 		console.log('xxxx');
// // 	},
// // 	bark2() {
// // 		// same as bark2: function() {
// // 		console.log('2=', this.name);
// // 		setTimeout(() => {
// // 			console.log('22=', this.name);
// // 		}, 1000);
// // 	},
// // 	bark3() {
// // 		// ⇐⇒ bark3: function() {
// // 		function innerFn() {
// // 			console.log(this); // ?
// // 		}
// // 		innerFn.bind();
// // 	},
// // 	bark4: () => {
// // 		console.log(this.name); // ?
// // 	}, // bark4의 소유자(obj)의 Lexical Scope의 this
// // };

// // // obj.bark1(); // vs  var x = obj.bark1;
// // obj.bark2();
// // // obj.bark3();
// // // obj.bark4();

// // ⇔ function declareFn(name) {
// const expressFn = function(name) {
//     // if, 'use strict' ?
//     'use strict'
//     this.name = name;
//     console.log(this, new.target, this.name, name);
// }

// const arrowFn = (name) => {
//     this.name = name;
//     console.log(this, new.target, this.name, name);
// }

// expressFn('expfn');
// // arrowFn('afn');

// // const dfn = new expressFn('D');
// // console.log("🚀  dfn.name:", dfn.name)
// // const afn = new arrowFn('A'); // error!
// // const afn =  arrowFn('A'); //{ name: 'A' } undefined A A

const Dog = function (name) {
	if (!new.target) throw new Error('call constructor');
	console.log(this, new.target, this instanceof Dog);
	this.name = name;
	this.bark = function () {
		console.log(this);
		console.log('bark=', new.target, this, name);
	};
	this.bark2 = () => console.log('bark2=', this, this.name, name);
};

// const dog = Dog('Doggy');
const lucy = new Dog('Lucy');
lucy.bark();
lucy.bark2();
// Dog.bark(); // ?
// console.log(Dog); // -> function Object
// lucy.bark(); // ?
// // lucy.bark2(); // ?
// console.log('type=', typeof dog); // ? Dog 내부에 return 하는게 없기 때문에 undefined
// console.log('type=', typeof lucy); // ? 인스턴스 이기 때문에 object

// // 화살표 함수
// // this는 모듈
const Cat = (name) => {
    console.log('cat>>',this, new.target);
    this.name = name;
    this.bark = function () {
        // console.log('bark=',typeof this)
        console.log('bark=', new.target, this, name);
    };
    this.bark2 = () =>
      // console.log('bark=',typeof this)
        console.log('bark2=', new.target, this, name);

    return this; // 모듈
}

const cat = Cat('Coco');
console.log(cat.bark())
// cat.bark(); // ?
// cat.bark2()
// console.log("🚀  Cat  Cat:", cat)
//   // const cat = new Cat(''); // error!!

// cat.bark2(); // ?
//   Cat.bark(); // ?
//   console.log('type=', typeof cat); // ?

// const expressFn = function(name) {
//     // if, 'use strict' ?
//     console.log('11>>',this, new.target, this.name, name);
//     this.name = name;
//     console.log('22>>',this, new.target, this.name, name);
// }

// const arrowFn = (name) => {
//     console.log('11>>',this, new.target, this.name, name);
//     this.name = name;
//     console.log('11>>',this, new.target, this.name, name);
// }

// const hong = {id:1, name: 'Hong'}
// const kim = {id:2, name: 'Kim'}

// expressFn.bind(hong)('expfn');
// // arrowFn.bind(hong)('expfn');
// arrowFn.call(hong, 'afn')
// arrowFn.apply(kim,['afn'])

// globalThis.name = 'Global Name';

// const obj = {
//   name: 'Obj Name',
//   printName() {
//     console.log(this.name);
//   },
// };

// const printName = obj.printName;
// // obj.printName(); // printName.bind(obj)();
// printName();
