/**
 * NOTE: 타입 추론 (type-inference)
 *
 * - 변수의 선언과 할당, 속성, 인자의 기본 값, 함수의 반환 값 등을 설정할 때 타입 추론이 일어난다.
 */

// ✏️ 타입 추론 기본 1
var a = "abc";
var b = 1;

// ES2015 이후에 나온 문법 (c라는 값을 넘기지 않으면 default로 10을 넘긴다)
function getC(c = 10) {
  var d = "10";
  return c + d; // 10 + '10' => 1010 즉 string
}

// ✏️ 타입 추론 기본 2
// 복잡한 type 정의할때, TS 내부적으로 어떻게 추론해나가는지 보기.
// (타입을 받아서 내부적으로 사용할 수 있는 제네릭 이용해보기)
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: '쇼퍼백',
//   title: 'Bag'
// };

// ✏️ 타입 추론 기본 3
// interface 2개를 이용해서 제네릭을 연결했을 때도 똑같이 타입 추론이 발생하는지 보기
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "DetailedDropdown의 string이 Dropdown으로 넘어감",
  tag: "그렇군",
};

var detailedItem2: DetailedDropdown<number> = {
  title: "title은 string",
  description: "description도 기존에 설정된 대로 string",
  value: 1,
  tag: 2,
};

/**
 * NOTE: 가장 적절한 타입 (Best Common Type)
 *
 * - TS의 해석 방식, 알고리즘.
 *
 * 타입은 보통 몇 개의 표현식(코드)을 바탕으로 타입을 추론한다.
 * 그리고 그 표현식을 이용해 가장 근접한 타입을 추론하게 되는데, 이 가장 근접한 타입을 Best Common Type이라 한다.
 */

var arr = [1, 2, 3];
var arr1 = [1, 2, true]; // (number | boolean)[] => union type으로 지정
