// const str = 'Senior Coding Learning JS';
// // /[A-z\d]/.test(str) // ?
// console.log('🚀  /[A-zd]/.test(str):', /[A-z\d]/.test(str));
// // /(A-z\d)/.test(str) // ?
// console.log('🚀  /(A-zd)/.test(str):', /(A-z\d)/.test(str));
// // /(A-z\d)/.test('XA-z2') // ?
// console.log("🚀  /(A-zd)/.test('XA-z2'):", /(A-z\d)/.test('XA-z2'));
// // /(A-z\d)/.test('XAz2') // ?
// console.log("🚀  /(A-zd)/.test('XAz2'):", /(A-z\d)/.test('XAz2'));

// const regexp = /senior|coding/gi;
// if (regexp.test('Junior Developer')) console.log('Junior Developer', 'OK');
// console.log('🚀  regexp.lastIndex:', regexp.lastIndex);
// if (regexp.test('Senior Developer')) console.log('Senior Developer', 'OK');
// console.log('🚀  regexp.lastIndex:', regexp.lastIndex);
// if (regexp.test('JS Coding')) console.log('JS Coding', 'OK');
// console.log('🚀  regexp.lastIndex:', regexp.lastIndex);
// if (regexp.test('JavaScript Coding')) console.log('JavaScript Coding', 'OK');
// console.log('🚀  regexp.lastIndex:', regexp.lastIndex);

// console.log(
// 	"🚀  'Junior Developer'.match(regexp):",
// 	regexp.exec('Junior Developer')
// );
// console.log(
// 	"🚀  'Senior Developer'.match(regexp):",
// 	regexp.exec('Senior Developer')
// );
// console.log("🚀  'JS Coding'.match(regexp):", regexp.exec('JS Coding'));
// console.log(
// 	"🚀  'JavaScript Coding'.match(regexp):",
// 	regexp.exec('JavaScript Coding')
// );

var s = '강원도 고성군 토성면';
s.match(/성/); // [ '성', index: 5, input: '강원도 고성군 토성면', groups: undefined ]
s.match(/성/g); // [ '성', '성' ]
s.match(/.../g); // [ '강원도', ' 고성', '군 토' ]
s.match(/\S\S\S/g); // [ '강원도', '고성군', '토성면' ]  ⇐⇒ /\S{1,3}/g, /\S{3}/g
s.match(/도|고|리/g); // [ '도', '고' ]   ⇐⇒ s.match(/[도고리]/g);
s.match(/성군/g); // [ '성군' ]  cf. s.search(/성군/g); ⇐ 5, s.search(/도/g); ⇐ 2
s.match(/성(군|면)/g); // [ '성군', '성면' ]    ⇐⇒ s.match(/성[군면]/g);
s.match(/.성(군|면)/g); // [ '고성군', '토성면' ]  ⇐⇒ /..(군|면)/g, /..?(군|면)/g
s = '강원도 고성군 토성면 북면';
s.match(/.성(군|면)/g); // [ '고성군', '토성면' ]
s.match(/..?(군|면)/g); // [ '고성군', '토성면', ' 북면' ]
s.match(/..{0,1}(군|면)/g); // [ '고성군', '토성면', ' 북면' ]
s.match(/\S.?(군|면)/g); // [ '고성군', '토성면', '북면' ]   ⇐⇒ s.match(/\S.{0,1}(군|면)/g)
s.match(/\S.*(군|면)/g); // ?     ⇐⇒ s.match(/\S.+(군|면)/g)
s.match(/[가-기]/g); // [ '강', '고', '군' ]   cf. '영나수ㄴㅃㅅㄲ'.match(/[ㄴ나-닣]/g)
s.match(/[가-기]\S/g); // [ '강원', '고성' ]  cf. '영강수ㄴㅃㅅㄲ'.match(/[ㄱㄲ가-깋]/g)

'abcd-ef-g'.search(/\w-\w/g);
console.log("🚀  'abcd-ef-g'.search(/w-w/g):", 'abcd-ef-g'.search(/\w-\w/g));
