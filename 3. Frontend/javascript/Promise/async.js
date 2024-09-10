const afterTime = (sec) =>
	new Promise((resolve) => setTimeout(resolve, sec * 500, sec));

// const odds = [1, 2, 3].filter(async (val) => {
// 	const r = await afterTime(val).then((res) => {
// 		return res % 2 === 1 ? res : false;
// 	});
// 	if (r) console.log(r);
// });
// console.log('odds=', odds);

const odds = [1, 2, 3].filter(async (val) => {
	const r = await afterTime(val);
	console.log(r);
	return r % 2 === 1;
});
console.log('odds=', odds);

// const ps = [1, 2, 3].map(afterTime);
// console.log('🚀  rrr:', ps);
const rrr = (await Promise.all([1, 2, 3].map(afterTime))).filter((n) => n % 2);
console.log('🚀  rrr:', rrr);
