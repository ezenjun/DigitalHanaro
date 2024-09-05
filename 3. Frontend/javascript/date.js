import assert from 'assert';

// 1
console.log(
	(new Date('1970-01-02').getTime() - new Date('1970-01-01').getTime()) / 1000
);
// 강사님
function ex1() {
	const d1 = new Date('1970-01-01').getTime();
	const d2 = new Date('1970-01-02').getTime();
	console.log('🚀  ex1  d2 - d1:', d2 - d1);
	return (d2 - d1) / 1000;
}

assert.deepStrictEqual(ex1(), 86400);

// 2
const today = new Date();
const lastDay = new Date(
	today.getFullYear(),
	today.getMonth() + 1,
	0
).getDate();

const dates = [];
const rand = (s, e) => Math.floor(s + (e - s + 1) * Math.random());
for (let i = 0; i < 5; i += 1) {
	dates.push(rand(1, lastDay));
}
dates.sort((a, b) => b - a);
console.log('🚀  dates:', dates);

// 강사님
function ex2() {
	const rand = (s, e) => Math.floor(s + (e - s + 1) * Math.random());
	const d = new Date();
	d.setMonth(d.getMonth() + 1);
	d.setDate(0);
	const lastDate = d.getDate();
	// const r1 = Array(5)
	// 	.fill(0)
	// 	.map(() => rand(1, lastDate)); // 중복이 일어남
	let randDates = [];
	do {
		const rdate = rand(1, lastDate);
		if (!randDates.includes(rdate)) {
			randDates.push(rdate);
		}
		// randDates.push(rand(1, lastDate));
		// randDates = [...new Set()];
	} while (randDates < 5);
	// console.log(r1.sort((a, b) => b - a));
	console.log(randDates.sort((a, b) => b - a));
	return randDates.sort((a, b) => b - a);
}
ex2();
// 정렬 여부, 중복 여부 테스트 코드 추가해보기

// 3
const Year = today.getFullYear();
const Month = today.getMonth();
const day = today.getDate();
console.log(
	new Date(`${Year + 1}-${Month + 1}-${day}`).toLocaleDateString('ko-KR', {
		weekday: 'long',
	})
);

const moment = require('moment');
console.log(
	new Date(today.setDate(100 + today.getDate())).toLocaleDateString('ko-KR')
);
console.log("🚀  moment().add(100, 'days'):", moment().add(100, 'days'));
