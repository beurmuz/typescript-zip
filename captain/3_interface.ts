// interface는 변수의 타입으로 사용할 수 있다.
// 인터페이스를 타입으로 선언한 변수는 해당 인터페이스를 준수하여야 한다.
interface User {
  name: string;
  age: number;
  phoneNumber: string;
}

// 변수의 인터페이스 활용
let minsik: User = {
  name: "SIK-K",
  age: 31,
  phoneNumber: "010-0000-0000",
};

// 함수와 인터페이스 활용 - 인자로 받는 user는 항상 User 라는 특정 형식을 준수하는 데이터만 받겠다는 뜻
function getUser(user: User) {
  console.log(user);
}
getUser(minsik);

const junwon: User = {
  name: "pH-1",
  age: 36,
  phoneNumber: "010-1111-1111",
};
getUser(junwon);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number; // (인자): 반환 타입
}

let sum: SumFunction; // 함수에 대한 타입 정의
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = ["a", "b", "c"];
// arr[0] = 1; // string만 가능하다가 명시해줘서 number는 불가능
arr[1] = "s"; // 가능

// 딕셔너리 패턴 (인덱싱이랑 유사함)
interface StringRegexDictionary {
  [key: string]: RegExp;
}
let obj: StringRegexDictionary = {
  sth: /abc/,
  // cssFile: 'css', // 에러 발생. 속성의 type은 반드시 RegExp여야 함
  jsFile: /\.js$/,
};
// obj['tsFile'] = 'ts'; // 정해놓은 규칙, 즉 interface에 어긋났기 때문에 에러 발생.
Object.keys(obj).forEach(function (value) {
  console.log(value);
});

// Interface의 확장 (OOP상속, JS의 Prototype 느낌)
interface Person {
  name: string;
  age: number;
}

// 기존 정의
// interface Developer {
//   name: string;
//   age: number;
//   skills: string;
// }

// 위의 Developer interface를 Person을 상속하게끔 바꿀 수 있음
interface Developer extends Person {
  skills: string;
}

let muz: Developer = {
  name: "beurmuz",
  age: 26,
  skills: "TypeScript",
};
console.log(muz);
