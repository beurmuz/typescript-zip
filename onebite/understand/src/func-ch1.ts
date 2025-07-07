/**
 * '함수 타입 표현식'과 '호출 시그니쳐'는
 * 함수의 타입을 별도로 정의하는 문법들
 */

/**
 * 함수 타입 표현식 (function type expression)
 *
 * - 타입 별칭을 이용해 함수의 타입을 별도로 정의하는 문법
 *  -> 이를 이용하면 타입 별칭을 이용해서 함수의 타입을 정의할 수 있다.
 *
 * - 타입 별칭 없이 표현식만으로도 타입을 정의하는게 가능하다.
 */
// JS의 화살표 함수를 만들듯, 함수의 타입을 type 별칭으로 별도로 정의해줄 수 있다.
type Operation = (a: number, b: number) => number; // (매개변수 타입) => 반환값 타입
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 타입 별칭 없이 표현식만으로 타입을 정의하는 방법
// - 사실 타입 별칭은 '='를 기준으로 우항에 있는 타입을 좌항에 있는 이름으로 부르겠다는 것.
// - 아래의 식에서 '(a: number, b: number) => number'는 Operation을 넣은 것과 똑같다.
const add2: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니쳐 (= 콜 시그니쳐)
 *
 * - 함수의 타입을 분리해서 따로 정의할 수 있다.
 */
type Operation3 = {
  (a: number, b: number): number;
  //   name: string; // 이런것도 추가 가능. JS의 함수는 객체이기 때문이다!
};
const add3: Operation3 = (a, b) => a + b;
const sub3: Operation3 = (a, b) => a - b;
const multiply3: Operation3 = (a, b) => a * b;
const divide3: Operation3 = (a, b) => a / b;

add3(1, 3);
// add3.name; // 하이브리드 타입
