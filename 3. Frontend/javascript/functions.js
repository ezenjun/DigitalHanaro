function f() {
	console.log('f>>', this.name);
}
f();
f.bind({ name: 'Binding' })();
f();

const boundF = f.bind({ name: 'BoundF' });
console.log(boundF === f);
boundF();
return;
