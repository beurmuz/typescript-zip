"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// 2. string
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// 3. boolean
let bool1 = true;
let bool2 = false;
// 4. null
let null1 = null;
// 5. undefined
let unde1 = undefined;
// NOTE: 생각해보기
// let numA: number = null; // tsconfig에서 strictNullCheck를 false로 설정해야만 이렇게 쓸 수 있음
// + 리터럴 타입
//   : '값'으로 만든 타입으로, 값 자체가 type이 됨
//   - 리터럴 타입은 원시 타입에 포함되는 값 중 하나를, 마치 타입처럼 사용할 수 있다.
let numA = 10; // 변수의 타입을 값 자체로 정의하면, 10 이외에 다른 값을 넣을 수 없다.
numA = 12; // Error
let strA = "typescript";
strA = "hello"; // Error
let boolA = true;
boolA = false; // Error
