const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
// 메모리로 접근하는 방법이다
// const는 해당 변수의 주소가 바뀌지 않는 다는 것
console.log('🚀  arr:', arr);

let arr2 = [1, 2];
let [a, b] = arr2;
arr2 = [b, a];
console.log('🚀  arr2:', arr2);

// 강사님
const arr3 = [1, 2];
[arr3[0], arr3[1]] = [arr3[1], arr3[0]];
console.log('🚀  arr3:', arr3);

// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)

const user = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };
function f1(user) {
	console.log(user.id, user.name);
}
f1(user);

function f2({ id, name }) {
	console.log(id, name);
}
f2(user);

const f3 = (user) => {
	console.log(user.id, user.name);
};
f3(user);

const f4 = ({ id, name }) => {
	console.log(id, name);
};
f4(user);
// for (const [k, v] of Object.entries(user)) {
// 	console.log(k, v);
// }

// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
const user2 = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };
const { passwd, ...userInfo } = user2;
console.log('🚀  newObject:', userInfo);
// 강사님
function ex2() {
	// const {passwd, ...userInfo} = user2;
	// delete user2.passwd; // 단 user가 변형이 오기때문에 안정적이지는 않다
	const userInfo = { ...user };
	delete userInfo.passwd;
	console.log('🚀  newObject:', userInfo);
}
ex2();

// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.
// (destructuring 활용)
const arr4 = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr4;
console.log(id1, id2, id3); // 1 2 3

// 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를 destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.

// const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
// function getValueExceptInitial(k) {
//   const (가) = user;
//   const (나) = [...val];
//   return (다);
// }

const s = Symbol();
const obj = { [s]: 123 };
console.log(obj[s]);
console.log(obj[s], Object.keys(obj)); // 123 [ Symbol() ] -> symbol은 노출이 안됨
console.log('Reflect.ownKeys', obj[s], Reflect.ownKeys(obj));
const [kk] = Reflect.ownKeys(obj);
console.log(obj[kk]);

const user1 = { name: 'Hong', passwd: 'xyz', addr: 'Seoul' };
function getValueExceptInitial(k) {
	// const { [Symbol()]: val } = user1;
	const { [k]: val } = user1; // [] 를 사용하면 [] 안의 변수를 key로 설정한다.
	if (typeof val !== 'string') return;
	const [, ...rest] = val;
	return rest.join('');
}
console.log(getValueExceptInitial('name')); // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr')); // 'eoul'

class Dog {
	constructor(name) {
		this.name = name;
	}

	get getName() {
		return this.name;
	}

	fn() {
		return 'FN';
	}

	static sfn() {
		return 'SFN';
	}
}
const lucy = new Dog('Lucy');
const { sfn } = Dog;
const { name: aa, fn: fnnn, getName } = lucy;

console.log(aa, sfn(), fnnn(), getName); // ?
console.log(lucy.getName); // ?

function getDiffMillis(dt1, dt2) {
	d1 = new Date(dt1);
	d2 = new Date(dt2);
	const { getTime: getTime1 } = d1; // 새로운 인스턴스 생성
	const { getTime: getTime2 } = d2;
	return getTime1.bind(d1)() - getTime2.bind(d2)();
}
getDiffMillis('2021-01-01', '2021-01-02');
console.log(getDiffMillis('2021-01-01', '2021-01-02'));

// function ex5() {
// 	user.f = function () {
// 		console.log('ffff', this.name);
// 	};
// 	user.f();
// 	console.log('🚀  ex5  user:', user);
// 	const { f: xf } = user;
// 	xf();
// }
// ex5();
