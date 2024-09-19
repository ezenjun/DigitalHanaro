const total = { price: 45000, vat: 4500 };
function fmt(texts, ...args) {
	return `${texts[0]}${String(args[0].toLocaleString("ko-KR")).padStart(
		8,
		" "
	)}${texts[1]}`;
}
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

// const isEndJaum2 = (word) => {
// 	const letters = ['l', 'm', 'n', 'r'];
// 	const numbers = ['1', '3', '6', '7', '8', '0'];
// 	if (typeof word !== 'string') return false;
// 	const lastChar = word[word.length - 1];

// 	var uni = lastChar.charCodeAt(0);
// 	if (uni <= 122 && uni >= 65) {
// 		if (letters.includes(lastChar.toLowerCase())) return true;
// 		else return false;
// 	}
// 	if (uni <= 57 && uni >= 48) {
// 		if (numbers.includes(lastChar)) return true;
// 		else return false;
// 	}

// 	if (uni < 44032 || uni > 55203) return false;

// 	return (uni - 44032) % 28 != 0;
// };

// const ㄱ = 'ㄱ'.charCodeAt();
// const ㅎ = 'ㅎ'.charCodeAt();
// const 가 = '가'.charCodeAt();
// const 자음알파벳숫자 = [...'LMNRlmnr136780'].map((a) => a.charCodeAt());

// const isEndJaum = (word) => {
// 	const regex = /^[lnmrLMNR013678ㅏ-ㅣ]/;
// 	const lastChar = word[word.length - 1];
// 	var uni = lastChar.charCodeAt(0);
// 	if (uni >= 44032 && uni <= 55203) {
// 		return (uni - 44032) % 28 != 0;
// 	}
// 	if (!regex.test(lastChar)) return false;
// 	return true;
// };

// const iga = (word) => {
// 	// if (isEndJaum(word)) return `${word}이`;
// 	// else return `${word}가`;

// 	return `${isEndJaum(word) ? '이' : '가'}`;
// };

// const eunun = (word) => {
// 	// if (isEndJaum(word)) return `${word}은`;
// 	// else return `${word}는`;

// 	return `${isEndJaum(word) ? '은' : '는'}`;
// };

// const eulul = (word) => {
// 	// if (isEndJaum(word)) return `${word}을`;
// 	// else return `${word}를`;

// 	return `${isEndJaum(word) ? '을' : '를'}`;
// };

// console.log(iga('고성군'));
// console.log(eunun('고성군'));
// console.log(eulul('고성군'));

// console.log(iga('강원도'));
// console.log(eunun('강원도'));
// console.log(eulul('강원도'));

// import assert from 'assert';
// isEndJaum('강원도'); // false
// console.log("🚀  isEndJaum('강원도':", isEndJaum('강원도'));
// isEndJaum('바라당'); // true
// console.log("🚀  isEndJaum('바라당'):", isEndJaum('바라당'));
// isEndJaum('ㅜㅜ'); // false
// console.log("🚀  isEndJaum('ㅜㅜ'):", isEndJaum('ㅜㅜ'));
// isEndJaum('케잌'); // true
// console.log("🚀  isEndJaum('케잌'):", isEndJaum('케잌'));
// isEndJaum('점수 A'); // false lmnr   cf. isEndJaum('알파벳L')은 true
// console.log("🚀  isEndJaum('점수 A'):", isEndJaum('점수 A'));
// console.log("🚀  isEndJaum('점수 L'):", isEndJaum('점수 L'));
// // isEndJaum('24');
// console.log("🚀  isEndJaum('24'):", isEndJaum('23'));
// console.log("🚀  isEndJaum('24'):", isEndJaum('24'));

// assert.strictEqual(`고성군${iga('고성군')}`, '고성군이');
// assert.strictEqual(`고성군${eunun('고성군')}`, '고성군은');
// assert.strictEqual(`고성군${eulul('고성군')}`, '고성군을');
// assert.strictEqual(`성동구${iga('성동구')}`, '성동구가');
// assert.strictEqual(`성동구${eunun('성동구')}`, '성동구는');
// assert.strictEqual(`성동구${eulul('성동구')}`, '성동구를');
// assert.equal(isEndJaum('아지오'), false);
// assert.equal(isEndJaum('북한강'), true);
// assert.equal(isEndJaum('뷁'), true);
// assert.equal(isEndJaum('강원도'), false);
// assert.equal(isEndJaum('바라당'), true);
// assert.equal(isEndJaum('ㅜㅏ'), false);
// assert.equal(isEndJaum('케잌'), true);
// assert.equal(isEndJaum('점수 A'), false);
// assert.equal(isEndJaum('알파벳L'), true);
// assert.equal(isEndJaum('24'), false);
// assert.equal(isEndJaum('23'), true);

// function searchByKoreanInitialSound(s, initials) {
// 	// 초성을 정규식으로 변환하는 함수
// 	function initialsToRegex(initials) {
// 		const initialMap = {
// 			ㄱ: '[가-깋]',
// 			ㄲ: '[까-낏]',
// 			ㄴ: '[나-닏]',
// 			ㄷ: '[다-딯]',
// 			ㄸ: '[따-띳]',
// 			ㄹ: '[라-릿]',
// 			ㅁ: '[마-밋]',
// 			ㅂ: '[바-빋]',
// 			ㅃ: '[빠-삳]',
// 			ㅅ: '[사-싷]',
// 			ㅆ: '[싸-씯]',
// 			ㅇ: '[아-잇]',
// 			ㅈ: '[자-짯]',
// 			ㅉ: '[짜-찿]',
// 			ㅊ: '[차-칟]',
// 			ㅋ: '[카-킷]',
// 			ㅌ: '[타-틑]',
// 			ㅍ: '[파-핋]',
// 			ㅎ: '[하-힣]',
// 		};

// 		let regexStr = '';
// 		for (let char of initials) {
// 			if (initialMap[char]) {
// 				regexStr += initialMap[char]; // 초성일 경우 정규식 추가
// 			} else {
// 				regexStr += char; // 초성이 아닐 경우 그대로 추가
// 			}
// 		}
// 		return new RegExp(`^${regexStr}`); // 문자열의 시작에서 매칭
// 	}

// 	const regex = initialsToRegex(initials);
// 	const result = s.filter((str) => regex.test(str)); // 정규식에 맞는 문자열 필터링

// 	return result; // 결과를 반환
// }

// // 예시 사용
// const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];

// console.log(searchByKoreanInitialSound(s, 'ㄱㅅㄱ')); // ['강원도 고성군', '고성군 토성면']
// console.log(searchByKoreanInitialSound(s, 'ㅌㅅㅁ')); // ['토성면 북면']
// console.log(searchByKoreanInitialSound(s, 'ㅂㅁ')); // ['북면']
// console.log(searchByKoreanInitialSound(s, 'ㅍㅁ')); // []
// console.log(searchByKoreanInitialSound(s, 'ㄱ1ㅅ')); // []

// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅇ'), [
// 	'강원도 고성군',
// ]);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅅㄱ'), [
// 	'강원도 고성군',
// 	'고성군 토성면',
// ]);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅌㅅㅁ'), [
// 	'고성군 토성면',
// 	'토성면 북면',
// ]);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅂㅁ'), [
// 	'토성면 북면',
// 	'북면',
// ]);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅍㅁ'), []);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱ1ㅅ'), ['김1수']);
