// JS 문자열 선언 -> 자료형을 따로 명시하지 않음
let str1 = "hello";

// TS 문자열 선언
let str2: string = "hello";

// TS 숫자 선언
let num: number = 0;

// TS 배열 선언
let arr1: Array<number> = [1, 2, 3];
let arr2: Array<string> = ["sik-k", "pH-1", "jaypark"];
let arr3: number[] = [1, 2, 3, 4, 5];

// TS 튜플 선언 - 배열의 특정 인덱스, 순서의 타입까지 정의 가능
let tuple1: [string, number] = ["age", 20];

// TS 객체
let obj1: object = {};
let artist1: object = {
  name: "SIK-K",
  age: 31,
};
let artist2: { name: string; age: number } = {
  name: "pH-1",
  age: 36,
};

let show: boolean = true;
