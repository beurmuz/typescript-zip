// 1. 배열
// 배열 타입을 정의하는 방법 1) 배열의 요소 타입 적고, 해당 타입이 배열임을 알리기 위해 []를 붙여준다.
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "mmmmmue"];
let boolArr: boolean[] = [true, false, true];

// 배열 타입을 정의하는 방법 2) Array<> -> <>(제네릭) 안에 배열의 요소 타입을 작성한다.
let boolArr2: Array<boolean> = [true, false, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 유니언 타입 이용하기 '|'
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법. (2, 3차원 ...)
// 가장 먼저 요소들의 타입을 적어준 후,
let doubleArr: number[][] = [[1, 2, 3], [4, 5], [6]];

// 2. 튜플
// - javascript에는 없고 typescript에서 특별히 제공됨
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // error
// tup1 = ["1", "2"]; // error

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ['2', 1, 3]; // error

// 근데 tsc로 컴파일하고 javascript 파일을 보면 튜플 타입은 배열로 변환되는 것을 확인할 수 있다.
// 그래서 push,pop 등의 배열 메서드를 사용할 수 있다.
tup2.push("2"); // 배열 메서드를 사용할 때에는 tuple의 길이 제한이 발동하지 않는다. 어차피 javascript의 배열이라고 생각하기 때문에 못알아보는 것이다.
tup2.pop();
tup2.pop();
tup2.pop();

// NOTE: 그렇다면 튜플은 언제 사용하는가?
// 배열을 사용할 때 인덱스별로 다른 값을 넣어야하는데, 순서와 위치가 헷갈릴 수 있음. 그럴때 튜플을 사용하면 good
const users: [string, number][] = [
  ["sikk", 1],
  ["ph1", 2],
  ["haon", 3],
  [5, "nugu"], // error
];
