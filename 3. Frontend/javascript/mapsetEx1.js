// 다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고,
// 개발팀 직원 이름 목록을 출력하시오. (key: id)
import assert from 'assert';
const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: 'Hong', dept: 1 }; // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
	hong,
	kim,
	{ id: 3, name: 'Park', dept: 2 },
	{ id: 4, name: 'Choi', dept: 2 },
];

const deptMap = new Map(depts.map((d) => [d.id, d]));

// const empMap = new Map(
// 	emps.map((emp) => {
// 		return [emp.id, emp];
// 	})
// );

const empMap = new Map(emps.map((emp) => [emp.id, emp]));

// 결과 출력

console.log('deptMap', deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log('empMap', empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

const empDept = new Map(
	[...empMap.values()].map((emp) => {
		const { dept } = emp;
		delete emp.dept;
		return [emp, deptMap.get(dept)];
	})
);
console.log('empDept', empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

// console.log(empDept.get(kim).dname); // '개발팀'
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);
// assert.deepStrictEqual(getEmp(1), {
// 	id: 1,
// 	name: 'Hong',
// 	dept: { id: 1, dname: '인사팀' },
// });
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi

function uniq() {
	Array.prototype.uniqBy = function (prop) {
		if (!prop && prop !== 0) return {};
	};
}
