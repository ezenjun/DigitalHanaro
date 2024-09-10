const myName: string = 'peter park'; // js 는 모듈로 되기 때문에 name 사용 가능
console.log(`Hello, ${myName}`); // name이 안되는 이유는 ts 는 전역으로 한개의 파일로 인식되기 때문
const myAge: number = 28;
console.log(`I am ${myAge}years old`);
// tsc -> typescript compile 하면 존재하는 ts를 컴파일해 js로 변환한다
let x: number | string; // type 지정 X 시 any // Type Annotation
x = 1; // 할당이 이루어지기 전에는 any
console.log(x); // 할당이 이루어진 후에는 number
x = 'abc'; //x: number 시 Type 'string' is not assignable to type 'number'.
console.log(x); // 할당이 이루어진 후에는 number

const len = x.length; // type 추론 x의 type은 string, length의 반환값은 number -> len은 자동으로 number로 type 추론
console.log(len.toFixed());

let y: number | undefined = undefined;
console.log('🚀  y:', y);

let john = {
	firstName: 'John',
	lastName: 'Doe',
};

type User = {
	id: number;
	name: string;
	age: number;
	address: string;
};

// interface User {
// 	id: number;
// 	name: string;
// 	age: number;
// 	address: string;
// };

let hong: User;
const peter: User = {
	id: 1,
	name: 'peter',
	age: 28,
	address: '경기도',
};

const something = ({ id, name, age, address }: User) =>
	// {
	// 	id: number;
	// 	name: string;
	// 	age: number;
	// 	address: string;
	// }
	{
		hong = {
			id,
			name,
			age,
			address,
		};
		console.log('🚀  peter:', hong);
	};
something(peter);
const strltr = 'LITERAL'; // string 리터럴 타입 not string 왜? const는 변하지 않기 때문에
let literal: 'LITERAL';
literal = strltr;
let nltr = 100; // number literal type

let str: string;
str = strltr; // 이건 가능 왜? stringLiteral type이기 때문에 가능하다.
// str = nltr; // 이건 불가능 string type에 number literal type은 할당 불가
console.log('🚀  str:', str);

let grade: 'S' | 'A' | 'B' | 'C'; // string literal union type
// grade = 'D';

type Member = {
	name: string;
	addr: string;
	discountRate: number;
};
type Guest = {
	name: string;
	age: number;
};

type Customer = Guest | Member;
let mem: Member;
let gues: Guest;
let customer: Customer, customer2: Customer;
customer = {
	name: '홍길동',
	age: 26,
	addr: '용산구',
	discountRate: 0.1,
};

// customer2 = {
// 	name: '홍길동',
// 	addr: '용산구',
// };
customer.name; // 공통되는 값만 나온다.

// let a: string | undefined;
// a = undefined;
// if (a) a?.slice(1);

let gildong = Math.random() > 0.5 && 'Honggildong';
if (gildong) {
	gildong.toUpperCase();
} else {
	gildong;
}
