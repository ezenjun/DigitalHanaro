function memoized(fn) {
	// 범용 memoized function
	const memoizedTable = {}; // {3: 3 * 2, 2: 2 * 1, 1: 1}
	return function B(k) {
		return memoizedTable[k] || (memoizedTable[k] = fn(k));
	};
}

const memoizedFactorial = memoized(function A(n) {
	memoizedFactorialRunCnt += 1;
	if (n === 1) return 1;
	return n * memoizedFactorial(n - 1);
});
let memoizedFactorialRunCnt = 0;
console.log(memoizedFactorial(3)); // B(3) ⇒ 6
console.log(memoizedFactorial(5));
console.log(`runCnt=${memoizedFactorialRunCnt}`);

function fibonacci(n) {
	if (n <= 1) return n;
	const fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib[n];
}
console.log('🚀  fibonacci  fibonacci1:', fibonacci(5));
console.log('🚀  fibonacci  fibonacci1:', fibonacci(7));
console.log('🚀  fibonacci  fibonacci1:', fibonacci(15));

function fibonacci(n) {
	let i = 0,
		j = 1;
	for (let k = 0; k < n; k++) {
		[i, j] = [j, i + j];
	}
	return i;
}
console.log('🚀  fibonacci  fibonacci:', fibonacci(7));

const recursiveFibonachi2 = (n) => {
	if (n <= 1) return n;
	return recursiveFibonachi2(n - 1) + recursiveFibonachi2(n - 2);
};
console.log(
	'🚀  recursiveFibonachi2  recursiveFibonachi2:',
	recursiveFibonachi2(15)
);

const memoizedFibonachi = memoized(function B(n) {
	if (n < 0) return undefined;
	if (n <= 1) return n;
	return memoizedFibonachi(n - 1) + memoizedFibonachi(n - 2);
});
console.log('🚀  memoizedFibonachi  memoizedFibonachi:', memoizedFibonachi(15));
// -----------------------------------------------------------------------------------
// 강사님
function loopFibonacci(n) {
	if (n <= 1) return n;
	let prev = 0,
		cur = 1;
	for (let i = 2; i <= n; i++) {
		let t = prev;
		prev = cur;
		cur = t + cur;
	}
	return cur;
}

console.log('🚀  loopFibonacci  loopFibonacci:', loopFibonacci(5));
console.log('🚀  loopFibonacci  loopFibonacci:', loopFibonacci(7));
console.log('🚀  loopFibonacci  loopFibonacci:', loopFibonacci(15));

function fibonacci(n) {
	if (n <= 1) return n;
	const fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib[n];
}
console.log('🚀  fibonacci  fibonacci1:', fibonacci(5));
console.log('🚀  fibonacci  fibonacci1:', fibonacci(7));
console.log('🚀  fibonacci  fibonacci1:', fibonacci(15));

function fibonacci3(n) {
	if (n <= 1) return n;
	const arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		[arr[0], arr[1]] = [arr[1], arr[0] + arr[1]];
	}
	return arr[1];
}
console.log('🚀  fibonacci  fibonacci3:', fibonacci3(5));
console.log('🚀  fibonacci  fibonacci3:', fibonacci3(7));
console.log('🚀  fibonacci  fibonacci3:', fibonacci3(15));

// -----------------------------------------------------------------------------------
// 강사님 recursive
function recursiveFibonachi(n) {
	if (n <= 1) return n;
	return recursiveFibonachi(n - 2) + recursiveFibonachi(n - 1);
}

// -----------------------------------------------------------------------------------
// 강사님 memoized
const memoizedFibonachi2 = memoized(function B(n) {
	if (n < 0) return undefined;
	if (n <= 1) return n;
	return memoizedFibonachi(n - 1) + memoizedFibonachi(n - 2);
});
console.log(
	'🚀  memoizedFibonachi  memoizedFibonachi:',
	memoizedFibonachi2(15)
);
