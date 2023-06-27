// export default로 정의된 함수를 가져오기
import add from './3.module1.js';
// default가 아니라면 {}로 가져오기
import { print as printMessage } from './3.module1.js';
// *를 통해 모든 export 가져오기
import * as calculator from './3.module1.js';

// module1에서 선언한 add가 사용가능해짐
// html 부분에 type='module'을 통해 module로 사용가능
console.log(add(1, 2));
printMessage();
console.log(calculator.number);
