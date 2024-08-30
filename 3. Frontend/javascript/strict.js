// 'use strict';
// const aaa = 1;
// console.log('🚀  aaa:', aaa);

'use strict';

// f = 1;
// NaN = 1;
// Infinity = 0;

function f(a) {
	console.log('outer f', a);
}
f(100);
{
	f(200);
	function f(a) {
		console.log('block f', a);
	}
}
f(300);
