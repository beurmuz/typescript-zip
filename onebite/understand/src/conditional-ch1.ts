/**
 * NOTE: 분산적인 조건부 타입
 * 
 * - 근데 만약 조건부 타입이 분산적으로 동작하지 않게 하고싶다면 extends의 양 옆에 []를 넣어주면 된다.
 *   -> type StringNumberSwitch<T> = [T] extends [number] ? string : number;
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // string | number 유니온 타입
// 위의 경우 StringNumberSwitch<number>의 결과와 StringNumberSwitch<string>의 결과가 '|'로 합쳐져 유니온 타입이 됨

let d: StringNumberSwitch<boolean | number | string>;
// 1단계)
//  StringNumberSwitch<boolean> |
//  StringNumberSwitch<number> |
//  StringNumberSwitch<string>
// 2단계)
//  number |
//  string |
//  number
// 최종 결과)
//  number | string

/**
 * NOTE: 실용적인 예제
 */
// 1. 유니온에서 특정 타입만 제거하기
type Exclude<T, U> = T extends U ? never : T; // T가 U의 서브타입이면 never를, 그게 아니면 T를 저장.

type A = Exclude<number | string | boolean, string>;
// 1단계)
//  Exclude<number, string> |
//  Exclude<string, string> |
//  Exclude<boolean, string>
// 2단계)
//  number |
//  never |
//  boolean
// 최종 결과)
//  number | never | boolean -> never가 사라진다. 그래서 'number | boolean'이 됨
// -> 이렇게 일부러 never를 만들어서 string 타입을 없애버린다!

// 2. 유니온에서 특정 타입만 추출하기
type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// 1단계)
//  Extract<number, string> | 
//  Extract<string, string> |
//  Extract<boolean, string>
// 2단계
//  never | 
//  string | 
//  never
// 최종 결과)
//  never | string | never -> 최종적으로 string만 된다!