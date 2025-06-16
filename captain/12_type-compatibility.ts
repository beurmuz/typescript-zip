/**
 * 타입 호환 (type Compatibility)
 *
 * ts 코드에서 특정 타입이 다른 타입에 잘 호환되는지 점검하는 것
 *
 * 기본적으로 타입 호환은 '='를 기준으로 오른쪽에 있는 타입이
 *  1) 더 많은 속성을 갖거나
 * 2) 구조적으로 더 컸을 때 왼쪽과 호환이 됨
 *
 * => 즉, 왼쪽이 오른쪽의 부분집합 느낌..
 */

// 1. 인터페이스
interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// }

// 2. 클래스
class Person {
  name: string;
}

var developer: Developer;
var person: Person;
developer = person; // error
// person = developer; // ok
developer = new Person(); // error;

// 3. 함수
var add = function (a: number) {
  // ...
};
var sum = function (a: number, b: number) {
  // ...
};
// add = sum; // error
sum = add; // ok. sum 은 2개의 파라미터를 받을 수 있는 구조이므로 호환 가능!

// 4. 제네릭
interface Empty<T> {
  // .. // 내부 구조적으로 비어있음
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; // 호환 ok
empty2 = empty1; // 호환 ok

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;
