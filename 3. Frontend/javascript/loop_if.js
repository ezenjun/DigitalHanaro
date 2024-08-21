var sum = 0;

// let, const는 블록 스코프
// var, func는 함수 스코프
for (let i = 0; i < 100; sum += i += 1);
console.log('🚀  sum - for:', sum);

sum = 0;
let i = 1;
while (i <= 100) {
	sum += i;
	i += 1;
}
console.log('🚀  sum - while:', sum);

sum = 0;
i = 0;
do {
	i += 1;
	sum += i;
} while (i < 100);
console.log('🚀  sum - do while:', sum);

for (; i < 200; ) {
	i++;
}
console.log('🚀  i:', i);

if (sum > 0 && sum <= 10) {
	console.log('🚀  sum:', sum);
} else if (sum > 10) {
	console.log('sum is over 10');
} else {
	console.log('🚀  zero:', zero);
}

console.log(sum > 10 ? 'T' : 'F');

const bloodType = 'D';
let sports = '운동';

switch (bloodType) {
	case 'A':
		sports = '사격';
		break;
	case 'B':
		sports = '펜싱';
		break;
	case 'O':
		sports = '배드민턴';
		break;
	case 'AB':
		sports = '야구';
		break;
	default:
		sports = '운동';
		break;
}

console.log('🚀  sports:', sports);

for (let i = 0.1; i < 1; i = i + 0.1) {
	console.log(i.toPrecision(1));
}

x = 2;
let ret = x === 1 ? 'one' : x === 2 ? 'two' : x === 3 ? 'three' : 'else';

ret =
	(x === 1 ? 'one' : '') || (x === 2 ? 'two' : '') || (x === 3 ? 'three' : '');
console.log('🚀  ret:', ret);

const alpha = ['zoro', 'one', 'two', 'three'];
console.log('🚀  alpha:', alpha[x] ?? 'ELSE');
