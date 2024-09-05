// const obj = { id: 1, name: 'Hong' };
// // cf. obj = {..., __proto__: { x: 11 }};

// console.log(obj.toString);
// ((Object.getPrototypeOf(obj) === Object.prototype) ===
// 	obj.constructor.prototype) ===
// 	obj.__proto__;
// class Animal {
// 	// instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
// 	static ID = 1;
// 	constructor(name) {
// 		// {name: …}
// 		this.name = name || super.constructor.name;
// 	}
// }
// const dog = new Animal('Dog');
// console.log('ok=', Object.keys(obj));
// console.log('ak=', Object.keys(dog));
// for (let k in dog) console.log('k=', k);
// console.log('oh=', obj.hasOwnProperty('id'));
// console.log('dh=', dog.hasOwnProperty('id'));

// typeof Animal; // ?
// console.log('🚀  typeof Animal:', typeof Animal);
// obj instanceof Object; // ?
// console.log('🚀  obj instanceof Object :', obj instanceof Object);
// Object instanceof Function; // ?
// console.log('🚀  Object instanceof Function:', Object instanceof Function);
// Animal instanceof Object; // ?
// console.log('🚀  Animal instanceof Object:', Animal instanceof Object);
// dog instanceof Animal; // ?
// console.log('🚀  dog instanceof Animal:', dog instanceof Animal);
// typeof (dog, obj, [], null); // ?
// console.log('🚀  typeof (dog, obj, [], null):', typeof (dog, obj, [], null));
// dog instanceof Array; // ?
// console.log('🚀  dog instanceof Array :', dog instanceof Array);
// // [] instanceof Array      // ?
// console.log('🚀  [] instanceof Array :', [] instanceof Array);
// // {} instanceof Object     // ?
// console.log('🚀  {} instanceof Object  :', {} instanceof Object);
// // [] instanceof Object     // ?
// console.log('🚀  [] instanceof Object :', [] instanceof Object);

// dog.constructor === Animal; // ?
// Object.values(dog);
// Object.entries(dog);

// class Cat extends Animal {
// 	static IDD   = 2;
// 	kukuki() {
// 		console.log('koookkkkkk');
// 	}
// }
// const cat = new Cat('Happy');
// console.log('static Cat>>', Cat.ID);
import assert from 'assert';

class Emp {
	constructor() {
		this.firstName = '';
		this.lastName = '';
	}

	set fullName(value) {
		const names = value.split(' ');
		if (names.length === 1) this.lastName = names[0].toUpperCase();
		else {
			this.firstName = names[0];
			this.lastName = names[1].toUpperCase();
		}
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const hong = new Emp();

hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
assert.strictEqual(hong.fullName, 'Kildong HONG');
hong.fullName = 'Lee';
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
assert.deepStrictEqual(hong.fullName, 'Kildong LEE');
