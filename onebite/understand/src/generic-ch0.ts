/**
 * 제네릭
 * : 모든 타입에 두루두루 쓸 수 있는 범용적인 함수 (함수계의 종합병원같다!)
 *
 * - 일반적인, 포괄적인. 제네럴!
 */

// <T>는 타입 변수. 타입을 저장하는 변수. (상황에 따라 다른 타입을 담을 수 있음)
function func<T>(value: T): T {
  return value;
}

let a = func(10);
let b = func("hi");
let c = func(true);

let arr = func([1, 2, 3]); // T: number[]
let arr2 = func<[number, number, number]>([1, 2, 3]); // T: [number, number, number]
