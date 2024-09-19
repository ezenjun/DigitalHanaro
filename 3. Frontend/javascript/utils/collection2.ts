export abstract class Collection<T> {
	protected readonly array;

	constructor(...values: T[]) {
		this.array = values;
	}

	size() {
		return this.array.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	toArray() {
		return [...this.array];
	}

	toString() {
		return `[${this.array.join(", ")}]`;
	}

	clear() {
		this.array.length = 0;
	}

	iterator() {
		return this[Symbol.iterator]();
	}

	abstract peek(): T | undefined;
	abstract print(): void;
	abstract [Symbol.iterator](): {
		next(): { value: T | undefined; done: boolean };
	};
}

type TNode<U> = { value: U; next?: TNode<U> };

class ArrayList<T> extends Collection<T> {
	static arrayToList<U>(array: U[]): TNode<U> | {} {
		let curValue = array[array.length - 1];
		if (!curValue) return {};

		let node: TNode<U> = { value: curValue };

		for (let i = array.length - 2; i > -1; i -= 1) {
			curValue = array[i];
			if (!curValue) continue;

			node = { value: curValue, next: node };
		}
		return node;
	}

	static listToArray<U>(list: TNode<U>) {
		const ret: U[] = [];
		let node: TNode<U> | undefined = list;

		while (node !== undefined) {
			ret.push(node.value);
			node = node.next;
		}
		return ret;
	}

	constructor(...values: T[]) {
		super(...values);
	}

	add(value: T, index = this.size()): this {
		this.array.splice(index, 0, value);
		return this;
	}

	removeFirst() {
		return this.array.shift();
	}

	removeLast() {
		return this.array.splice(this.size() - 1, 1)[0];
	}

	removeIndex(targetIndex: number) {
		return this.array.splice(targetIndex, 1)[0];
	}

	removeValue(targetValue: T) {
		const targetIndex = this.array.indexOf(targetValue);
		return this.removeIndex(targetIndex);
	}

	get(index: number) {
		return this.array[index];
	}

	set(index: number, value: T): this {
		this.array[index] = value;
		return this;
	}

	indexOf(value: T) {
		return this.array.indexOf(value);
	}

	contains(value: T) {
		return this.array.includes(value);
	}

	peek() {
		return this.array[0];
	}

	print() {
		console.log(ArrayList.arrayToList(this.array));
	}

	[Symbol.iterator]() {
		const array = this.array;
		let index = 0;
		return {
			next() {
				return {
					value: array[index++],
					done: index > array.length,
				};
			},
		};
	}
}
