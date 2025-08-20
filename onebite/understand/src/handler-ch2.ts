/**
 * keyof 연산자
 *
 * - 객체 타입에 적용하는 연산자
 * - type에만 사용할 수 있는 연산자
 */

// interface Person을 지우고 아래와 같이 한 줄만 작성해도 된다.
type Person = typeof person; // person 변수의 타입을 추론해줌

// interface Person {
//   name: string;
//   age: number;
// }

// keyof Person을 해주면 Person 객체에 있는 모든 프로퍼티의 key를 유니온 타입으로 추출함 'name' | 'age'
// function getPropertyKey(person: Person, key: keyof Person) { // interface 사용시
function getPropertyKey(person: Person, key: keyof typeof person) {
  // typeof 사용시
  return person[key];
}

// const person: Person = { // interface랑 쓸 때
const person = {
  // typeof랑 쓸 때
  name: "Minsik",
  age: 32,
};

getPropertyKey(person, "name"); // Minsik

// keyof 연산자는 typeof 연산자와 함께 사용할 수 있다.
// typeof는 특정 변수의 타입을 string 값으로 반환하는 연산자
// 하지만 ts에서 type을 정의할 때 쓰면, 동작이 다르게 바뀐다.
