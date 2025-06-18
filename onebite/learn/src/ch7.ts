// 1. void 타입
// 아무것도 없음(공허)을 의미하는 타입
// ts는 함수의 반환값에도 타입을 정의할 수 있음 - 단, void는 return문을 쓰고싶지 않을때 쓰면된다.
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}
// 변수의 타입을 void로 정의하면, 해당 변수에는 오직 undefined만 담을 수 있다.
let a: void;
// a = 1; // error
// a = 'hello'; // error
a = undefined;

// 2. never 타입
// 존재하지 않는, 불가능한 타입.
// 반환값이 있는게 모순이거나, 반환을 할 수 없거나, 애초에 정상적으로 종료가 되지 않는 경우
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
// a = 1;
// b = undefined; // error
// b = null; // error

let anyVar: any;
// b = anyVar; // error
