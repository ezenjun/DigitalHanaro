const user = {
	'': 1,
	' ': 1, // 'id': 1, '0y': 2 모두 OK!
	123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
	[12345n]: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
	true: 1, // OK  user[true]  user.true
	id: 2,
	[`name`]: 'Hong', // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
	// [Symbol()]: 'Hong', // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
	[`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
	'my-friends': ['Han', 'Kim'],
	getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
	getInfo() {
		return `${this.id}-${this.name}`;
	}, // OK! getInfo의 최종 <f.o>
};
// console.log('🚀  user.true:', user.getInfo());
// const keys = Reflect.ownKeys(user);
// console.log('🚀  keys:', keys);
// console.log(user[keys[keys.length - 1]]);

// let symKey;
// for (let i = 0; i < keys.length; i++) {
// 	const typ = typeof keys[i];
// 	console.log(keys[i], '🚀  typ:', typ);
// }

// //
// console.log(Object.keys(user), Object.keys(user).length); // keys & 15, Symbol은 제외!!

// console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length); // keys & 16 (+Symbol)

// user.addr = 'Seoul'; // ⇐⇒ user = {...user, addr: 'Seoul'}
// console.log('addr' in user, user.hasOwnProperty('addr')); // true true
// console.log('Ref.has>', Reflect.has(user, 'addr')); // true
// console.log('obj.getOwnPropSym>', Object.getOwnPropertySymbols(user)); // [ Symbol() ]

// delete user.addr; // ⇔ Reflect.deleteProperty(user, 'addr');
// console.log('addr' in user); // false

// user[`${user.id}'s name`] = `Mr. ${user.name}`; // prop생성시 snapshot!!(id 변해도 고정)
// console.log('user keys=', Object.keys(user));
// console.log('user entries=', Object.entries(user)); // Symbol은 제외!!
// console.log('user values=', Object.values(user)); // Symbol은 제외!!

// function entriesWithSymbol2(obj) {
// 	/**
// 	 * symbol keys들을 포함한 객체의 entries를 구하는 함수
// 	 * @param {*} obj
// 	 * @returns
// 	 */

// 	const rets = [];
// 	if (!obj || typeof obj !== 'object') return [];

// 	const entiresExceptSymbol = Object.entries(obj);
// 	const onlySymbolKeys = Object.getOwnPropertySymbols(obj);

// 	for (const sym of onlySymbolKeys) {
// 		entiresExceptSymbol.push([[sym, obj[sym]]]);
// 	}
// 	return rets;
// }
// console.log('ref.entries>>', entriesWithSymbol2(user));

// function entriesWithSymbol(obj) {
// 	if (!obj || typeof obj !== 'object') return [];
// 	const rets = [];
// 	for (const k of Reflect.ownKeys(obj)) {
// 		console.log('k=', k);
// 		rets.push([[k, obj[k]]]);
// 	}
// 	return rets;
// }
// console.log('ref.entries>>', entriesWithSymbol(user));

console.log(Object.getOwnPropertyDescriptor(user, 'id')); // value, writable,
Object.getOwnPropertyDescriptors(user);
console.log(
	'🚀  Object.getOwnPropertyDescriptors(user):',
	Object.getOwnPropertyDescriptors(user)
);

Object.defineProperty(user, 'age', {
	value: 39,
	writable: false,
	enumerable: true,
	configurable: false,
});
