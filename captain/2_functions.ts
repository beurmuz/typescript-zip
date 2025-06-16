// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function printT(): number {
  return 1;
}

// 함수에 타입을 정의하는 방식
function multiply(a: number, b: number): number {
  return a * b;
}

// JavaScript에서는 파라미터를 넘겨 보내도 자동으로 무시됨
// 그러나 TypeScript는 즉시 에러가 발생
function add(a: number, b: number): number {
  return a + b;
}
// add(10, 20, 30, 40, 50); // error

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
  console.log(a);
  if (b) console.log(b);
  if (c) console.log(c);
}
log("get a job", "pass!");
