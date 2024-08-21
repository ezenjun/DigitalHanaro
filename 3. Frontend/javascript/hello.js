const first = '';
const last = 'Bob';
console.log(`[${first && `${first} `}${last}]`);

let a = 0b1010,
	B2 = 0b1100;
console.log(
	(a & B2).toString(2),
	(a | B2).toString(2),
	(a ^ B2).toString(2),
	(~B2).toString(2)
);

console.log('🚀  a>>1 a>>>1 a<<1:', a >> 1, a >>> 1, a << 1);
console.log('🚀  a>>>1 a<<1:', a >>> 1, a << 1);

console.log('🚀  --------------------------');
const R = 1,
	W = 2,
	E = 4; // 0b001, 0b010, 0b100
let auth = parseInt('011', 2);
console.log('🚀  auth:', auth);
console.log('🚀  auth-binary >> ', `0n0${auth.toString(2)}`);
const hasWriteAuth = auth & W;
console.log('🚀  hasWriteAuth:', hasWriteAuth);
console.log('🚀  auth-binary >> ', `0n0${hasWriteAuth.toString(2)}`);
const hasExeAuth = auth & E;
console.log('🚀  hasExeAuth:', hasExeAuth);
console.log('🚀  auth-binary >> ', `0n0${hasExeAuth.toString(2)}`);
const hasReadAndExeAuth = auth & (R | E);
console.log('🚀  hasReadAndExeAuth:', hasReadAndExeAuth);
console.log('🚀  auth-binary >> ', `0n0${hasReadAndExeAuth.toString(2)}`);
auth = auth ^ E; // XOR
console.log('🚀  auth:', auth);
console.log('🚀  auth-binary >> ', `0n0${auth.toString(2)}`);
Number.MAX_SAFE_INTEGER;
console.log('🚀  Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);

Math.trunc(123.6541244);
console.log('🚀  Math.trunc(123.6541244);:', Math.trunc(123.6541244));
Math.floor(123.6451244);
console.log('🚀  Math.floor(123.6541244):', Math.floor(123));

console.log(new Date().toLocaleDateString());
console.log(new Date().toISOString());
console.log(new Date().toUTCString());
