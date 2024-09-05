// ex1) 배열의 각 원소를 String으로 변환하시오.
import assert from 'assert';
const arr = [1, 2, 3, true];
const ret1 = arr.map(String);
// const ret1 = arr.map((a)=>String(a)));
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) =>
	args.reduce((acc, a) => `${acc}${acc && a ? ' ' : ''}${a ? a : ''}`, '');

const classNames2 = (...args) => args.filter((a) => !!a).join(' ');
const classNames3 = (...args) => args.filter(Boolean).join(' ');
const classNames4 = (...args) =>
	args
		.map((a) => a.trim())
		.filter(Boolean)
		.join(' ')
		.replace(/\s{2,}/g, ' ');

const ret2 = classNames4('', ' a  b c ', 'd', ' ', 'e'); // cf. clsx
assert.strictEqual(ret2, 'a b c d e');
// 주의: ' a b c d  e'면 안됨!!
