console.log('#1: -----------------------------');
for (let i = 0.1; i <= 1; i += 0.1) {
	console.log(+i.toFixed(1)); // 강사님 코드
	// i = Math.round(i * 10) / 10;
	// console.log(i);
}

console.log('2: -----------------------------');
for (let j = 1; j <= 10; j++) {
	const s = Math.sqrt(j);
	if (s % 1) {
		console.log(j, +s.toFixed(3));
	}
}
console.log('2-1: -----------------------------');
// 내코드
// function printIrr(number) {
// 	j = number;
// 	while (true) {
// 		let sqrtValue = Math.sqrt(j);
// 		if (j == number || sqrtValue % 1) {
// 			console.log(j, sqrtValue.toFixed(3));
// 			j += 1;
// 		} else {
// 			break;
// 		}
// 	}
// }
// 강사님
function printIrr(number) {
	do {
		const s = Math.sqrt(number);
		console.log('s', number, +s.toFixed(3));
		if (Math.sqrt(number + 1) % 1 === 0) break;
		number++;
	} while (true);
}
console.log('🚀  printIrr(5):');
printIrr(5);
console.log('🚀  printIrr(5):');
printIrr(9);

console.log('#3: -----------------------------');
days = '일월화수목금토';
today = new Date();
day = today.getDay();
console.log(`🚀  오늘은 ${days[day]}요일`);

switch (day) {
	case 0:
		console.log(`🚀  오늘은 일요일`);
		break;
	case 1:
		console.log(`🚀  오늘은 월요일`);
		break;
	case 2:
		console.log(`🚀  오늘은 화요일`);
		break;
	case 3:
		console.log(`🚀  오늘은 수요일`);
		break;

	case 4:
		console.log(`🚀  오늘은 목요일`);
		break;
	case 5:
		console.log(`🚀  오늘은 금요일`);
		break;

	case 6:
		console.log(`🚀  오늘은 토요일`);
		break;
	default:
		break;
}

console.log(
	'🚀  오늘은',
	new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(today)
);

console.log('#4: -----------------------------');
// function addPoints(a, b) {
//     const maxLen = Math.max(
// 		a.toString().split('.')[1].length,
// 		b.toString().split('.')[1].length
// 	);
// 	console.log((a + b).toFixed(maxLen));
// }

function pointLength(f) {
	return f.toString().length - Math.trunc(f).toString().length - 1;
}

function addPoints(a, b) {
	const alen = pointLength(a);
	const blen = pointLength(b);
	const ret = (a + b).toFixed(alen > blen ? alen : blen);
	console.log('🚀  addPoints  ret:', ret);
}

addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);
