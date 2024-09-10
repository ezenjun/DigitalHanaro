import { b } from './b.js';
import defC, { c } from './c.js';
export const afn = () => console.log('a.afn!!'); // 이 위치 OK!
// (ModuleTable 선등록)
// console.log('AAAAAAAAAA');
b();
c();
defC();
// export const afn = () => console.log('a.afn!!'); // TDZ Error (uninitialize)
