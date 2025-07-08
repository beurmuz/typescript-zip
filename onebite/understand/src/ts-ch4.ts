/**
 * 대수 type
 *
 * 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 대수 타입에는 합집합 타입과 교집합 타입이 있다.
 */

/**
 * 1. 합집합 type -> Union 타입
 * - '|'를 이용해 추가할 수 있는 타입의 개수는 무한개이다.
 */
let a: string | number; // string과 number 둘 다 넣을 수 있다. -> string number Union 타입이라고 부름
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입으로 Union 만들기
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  // Dog Type에 해당하는 객체를 넣어줌
  name: "",
  color: "",
};

let union2: Union1 = {
  // Person Type에 해당하는 객체를 넣어줌
  name: "",
  language: "",
};

let union3: Union1 = {
  // Dog와 Person Type에 해당하는 모든 객체를 넣어줌
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   // error 발생. 합집합 안에 포함되지 않기 때문!
//   // -> 즉, color가 없어서 Dog Type이 될 수 없고, language가 없어서 Person Type도 될 수 없다.
//   name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 *
 * - 기본 타입을 이용해서 Intersection 타입을 만들면, 대체로 다 Never 타입이다.
 */
let variable: number & string; // number type와 string type의 교집합 타입에 해당하는 타입을 갖게 됨.
// 근데 number type과 string type의 교집합은.. 대체 무엇?
// -> 불가능하기 때문에 변수에 커서를 올리면 'never(불가능, 공집합)'가 뜸

let variable1: number & 1; // number type과 리터럴 type인 1의 교집합이므로 사실상 1만 된다.

type Intersection = Dog & Person;

let intersection1: Intersection = {
  // Dog Type의 프로퍼티와 Person Type의 프로퍼티를 모두 가지고 있는 다 가지고 있는 객체들만 포함한다.
  // 프로퍼티가 하나라도 빠지면 안된다. (Dog Type과 Person Type 둘다에 포함되어야 함)
  name: "",
  color: "",
  language: "",
};
