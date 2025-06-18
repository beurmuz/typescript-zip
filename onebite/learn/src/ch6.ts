// 1. any 타입
// 특정 변수의 타입을 확실히 모를 때 사용. -> 모든, 누구나. 즉, 어떤 타입이던지
// 타입 검사 없이, 타입 상관없이 아무 값이나 담을 수 있다.
let anyVar: any = 10; // ts는 초기화하는 값을 기준으로 변수의 타입을 자동으로 추론한다.
// anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar; // type 오류가 발생하지 X.
// any 타입을 변수에 지정할 경우, 모든 타입의 값을 다 할당받을 수 있고,
// 반대로 모든 타입의 변수에 다 any 타입의 값을 집어 넣을 수도 있다.
// 하지만 이렇다보니 컴파일 시 런타임 에러가 발생한다. (toUpperCase) -> 사실상 타입 검사를 안하는거랑 같음.
// => 그래서 가능한 최대한 사용하지 않는게 좋다!

// 2. unknown 타입
// 기본적으로 any와 비슷. 변수에 어떤 타입이 들어올 지 모르겠을 때 any or unknown을 쓰면 된다.
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 단, unknown은 모든 값을 저장할 수는 있지만 반대의 경우는 불가능하다.
// 그래서 아래와 같이 할당이나 메서드, 심지어 연산까지도 불가능하다.
// num = unknownVar; // error
// unknownVar.toUpperCase; // error

// unknown타입의 값을 활용하고 싶다면, 조건문과 typeof 연산자로
if (typeof unknownVar === "number") {
  // 현재 이 unknownVar 변수가 number 타입임을 확실히 밝혀 주었을 때만 unknown type의 변수를 number 타입으로 정제해서 사용할 수 있다.
  // => 타입 정제
}
