// WeakSet vs Set
const ws = new WeakSet();
const s = new Set();
{
	let obj1 = { id: 1 };
	const obj2 = { id: 2 };
	ws.add(obj1);
	ws.add(obj2);

	obj1 = null; // obj1 주소 변경
	console.log(ws, ws.has(obj1));

	s.add(obj1);
	s.add(obj2);
	console.log(s, s.has(obj1));
} // ws만 전역이라면 obj1, obj2는 GC!!
console.log(s.size, ws.size);
