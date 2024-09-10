"use strict";
let xuser;
// xuser = { id: 1, name: 'xx', age: 30 }; // error -> freshness
let tmp = { id: 1, name: 'xx', age: 30 }; // error 없음. 변수에 담아서 할당할 때에는 괜찮다 -> 할당이 일어나면 freshness가 꺼진다
// 냄비에 갓 캔 당근을 넣으면 안되는 것 처럼 당근을 씻는 과정이 할당이다.
xuser = tmp;
function f(cb) {
    return cb(1);
}
function f2(input) {
    return 2;
}
function f3(inptut) {
    return 1;
}
function f4(input) {
    return 1;
}
console.log(f(f2));
// console.log(f(f3));
// f(f4);
const lee = { id: 2, name: 'lee' };
const kim = { id: 2, name: 'kim', addr: 'pusan' };
const y1 = [{ id: 2, name: 'kim', addr: 'pusan' }, kim];
// const y2: [TUser, TUser] = [{ id: 2, name: 'kim', addr: 'pusan' }, lee];
let firstName = 'TOM';
firstName.length;
// firstName.length()
