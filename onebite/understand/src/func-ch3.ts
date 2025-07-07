/**
 * 함수 오버로딩
 *
 * : 하나의 함수를 매개변수의 개수나 타입에 따라, 여러가지 버전으로 정의하는 방법
 *
 * 하나의 함수 func
 * - 모든 매개변수의 타입은 number
 * - ver1. 매개변수 1개 -> 매개변수 * 20 값 출력
 * - ver2. 매개변수 3개 -> 매개변수들을 다 더한 값 출력
 */

// ! TS에서 함수 오버로딩을 사용하려면, 무조건 가장 먼저 함수에 어떤 버전들이 있는지를 알려주어야 한다.
// 이때, 함수의 구현부 없이 함수의 선언식만 사용한 것을 ✅ '오버로드 시그니쳐'라고 한다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> '구현 시그니쳐'
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); // error
func(1);
// func(1, 2); // error
func(1, 2, 3);
