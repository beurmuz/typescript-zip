/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// - JS: 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 말하기
// - TS: 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 말하기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입 정의 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 *
 * '?'를 붙이면 선택적 매개변수가 된다.
 * ! 선택적 매개변수는 필수 매개변수 앞에 오면 안된다.
 */
function introduce(name = "muse", age: number = 20, height?: number) {
  console.log(`name: ${name}`);
  if (typeof height === "number") {
    // 타입 좁히기
    console.log(`height: ${height + 10}`);
  }
}
introduce();
introduce("muz", 20, 170);

// rest parameter
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((num) => (sum += num));

  return sum;
}
getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15

function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((num) => (sum += num));

  return sum;
}
getSum2(1, 2, 3); // 6
// getSum2(1, 2, 3, 4, 5); // error
