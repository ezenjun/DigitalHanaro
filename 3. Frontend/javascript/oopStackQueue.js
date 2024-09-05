// class와 Array를 이용하여 Stack과 Queue를 구현하시오.
import assert from 'assert';
// ex1) Stack
class Stack {
	#arr = [];
	// arr;
	constructor(...args) {
		this.#arr.push(...args); // 주는 대로 받아야 감점 X
	}

	// push(value) {
	// 	this.arr.push(value);
	// 	return this.arr;
	// }

	push(...args) {
		this.#arr.push(...args);
		// this.arr = [...this.arr, ...args];
		return this.#arr;
	}

	pop() {
		return this.#arr.pop();
	}

	toArray() {
		return this.#arr;
	}
}

const stack = new Stack(); // or new Stack([1,2]); // ⇐⇒ (1,2)
assert.deepStrictEqual(stack.toArray(), []);
stack.push(3, 4); // 추가하기
assert.deepStrictEqual(stack.toArray(), [3, 4]);
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
assert.deepStrictEqual(stack.toArray(), [3]);

const stack2 = new Stack(1, 2);
assert.deepStrictEqual(stack2.toArray(), [1, 2]);
console.log(stack2.pop());
assert.deepStrictEqual(stack2.toArray(), [1]);

// stack.arr = [5, 6, 7]
// assert.throws();

class Queue {
	#arr = [];
	constructor(...args) {
		// this.#arr = [...args.reverse()]
		this.#arr.push(...args);
	}

	enqueue(...args) {
		// this.#arr.unshift(...args.reverse());
		this.#arr.push(...args);
		return this.#arr;
	}

	dequeue() {
		// return this.#arr.pop()
		return this.#arr.shift();
	}

	toArray() {
		return this.#arr.toReversed();
	}
}

// ToDo: ex2) Queue //
const queue = new Queue(1, 2);
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
