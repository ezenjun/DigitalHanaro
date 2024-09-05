const isDateValid = (dateStr) => {
	return !isNaN(new Date(dateStr));
};

const calendar = (input) => {
	if (!isDateValid(input))
		console.log('! 정상적인 날짜 형식이 아니어서 현재 날짜로 진행합니다. !');

	const iDate = isDateValid(input) ? new Date(input) : new Date();
	const date = new Date(`${iDate.getFullYear()}-0${iDate.getMonth() + 1}-01`); // 1일을 기준으로 그리기
	const month = iDate.getMonth() + 1;

	const empty = date.getDay(); // 1일의 요일을 기준으로 공백 생성 용
	const days = Array(empty).fill(-1);
	// 1일부터 추가 시작
	while (date.getMonth() === month - 1) {
		days.push(date.getDate());
		date.setDate(date.getDate() + 1);
	}
	const title = `${iDate.getFullYear()}년 ${iDate.getMonth() + 1}월`;
	console.log(title.padStart(30, ' '));
	console.log();
	console.log(
		'일월화수목금토'
			.split('')
			.map((w) => w.padEnd(2, '\t'))
			.join('')
	);

	console.log(
		days
			.map((day, i) => {
				day = day === -1 ? '' : day < 10 ? ` ${day}` : day;
				let delim = (i + 1) % 7 === 0 ? '\n' : '\t';
				return `${day}${delim}`;
			})
			.join('')
	);
	console.log();
};

calendar('2024.09');
calendar('2024.09.156');
calendar('2023/12/25');
