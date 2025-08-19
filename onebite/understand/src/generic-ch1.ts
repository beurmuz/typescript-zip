/**
 * 첫번째 사례
 */
// 매개변수 a, b의 타입이 다른 경우 'U'를 추가하면 된다.
function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */
function returnFirstValue<T>(data: T[]) {
  return data[0];
}
let num = returnFirstValue([0, 1, 2]); // 0 -> number
let str = returnFirstValue(["hello", "my", "name", "is"]); // hello -> string

// 튜플 타입으로 정의. 그 다음부터 들어오는 요소들은 어떤 타입인지, 몇개가 들어오는지 알 필요는 없음.
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let combi = returnFirstValue2([1, "hello", "my"]); // 1 -> number

/**
 * 세번째 사례
 */
// T를 length가 number인 프로퍼티가 있는 객체로 확장한다
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let len1 = getLength([1, 2, 3]); // 3
let len2 = getLength("12345"); // 5
let len3 = getLength({ length: 10 }); // 10
// let len4 = getLength(10); // error
