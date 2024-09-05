import assert from 'assert';
// 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오. (1회전으로 처리!)
//  → 배열의 각 요소를 제곱   n => n ** 2            [square]
//  → 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
//  → 배열의 각 요소를 세제곱  n => n ** 3            [cube]

const arr = [1, 2, 3, 4, 5];

const square = (a) => a ** 2;
const sqrt = (a) => Math.sqrt(a);
const cube = (a) => a ** 3;

const r5 = arr.map(square).map(sqrt).map(cube);
console.log('🚀  r5:', r5);

const baseJobs = [square, sqrt, cube];
const r6 = arr.map((a) => baseJobs.reduce((acc, job) => job(acc), a));
console.log('🚀  r6:', r6);

arr.reduce((acc, a) => cube(sqrt(square(a))));
const aJobs = [square, sqrt, cube];
const bJobs = [cube, square];

const robot = (arr, jobs) =>
	arr.map((a) => jobs.reduce((acc, job) => job(acc), a));

assert.deepStrictEqual(robot(arr, aJobs), [1, 8, 27, 64, 125]);
assert.deepStrictEqual(robot(arr, bJobs), [1, 64, 729, 4096, 15625]);
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]
// TryThis. 수행 순서를 자유롭게 변경하도록 해보세요.
// [square, sqrt, cube].reduce
// [cube, square, sqrt].reduce
