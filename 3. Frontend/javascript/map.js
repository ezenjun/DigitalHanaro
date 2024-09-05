const wm = new WeakMap();
const m = new Map();
let obj1 = { id: 1 };
let x = { id: 10 };
{
	const obj2 = { id: 2 };

	wm.set(obj1, 1);
	m.set(obj1, 1);
	console.log(wm, wm.has(obj1));
	console.log(m, m.has(obj1));

	wm.set(obj2, x);
	m.set(obj2, x);

	obj1 = null; // obj1 주소 변경!
	obj2.id = 3;
	x = { id: 100 };
	// x.id = 100;

    

	console.log(wm, wm.has(obj1), wm.has(obj2));
	console.log(m, m.has(obj1), m.has(obj2));
	// obj1이 null로 바뀜 -> heap에 새로운 값이 새로 생성(새로운 주소) -> wm과 m에 set을 하지 않았기 때문에 has를 하면 false
} // wm만 전역이라면 obj1, obj2는 GC!!
// console.log(m.size, wm.size); // 2, undefined
// console.log(wm, wm.has(obj1));
// console.log(m, m.has(obj1));
// console.log('m.keys>>', [...m.keys()]);
// console.log('m.values>>', [...m.values()], obj1, x);
