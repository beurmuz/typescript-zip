/**
 * NOTE: 조건부 타입
 *
 * - 삼항연산자를 이용해서 조건에 따라 타입을 결정하는 문법
 */

type A = number extends string ? string : number; // false이므로 number type이 됨

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // true니까 number. ObjA가 슈퍼, ObjB가 서브이기 때문에 ObjB는 ObjA를 확장함
// 조건부 타입은 삼항연산자를 이용해 앞에 있는 타입이 뒤에 있는 타입의 서브 타입인지를 확인한다고 보면 됨.

/**
 * NOTE: 제네릭과 조건부 타입
 *
 * - 실제로 가장 많이 쓰이는 사례
 */

// 사례 1) T가 number인 경우 string으로, string인 경우 number로!
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// 사례 2) 오버로드 시그니쳐 활용하기
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else return undefined;
}

let result = removeSpaces("hi my name is minsik");
result.toLocaleUpperCase();

let result2 = removeSpaces(undefined);
