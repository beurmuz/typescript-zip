/**
 * NOTE: infer
 * (= inference 추론하다)
 *
 * 조건부 타입 내에서 특정 타입만 딱 추론할 수 있는 기능
 */
type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>; // 교집합이 없는 서로소 집합이므로 never가 나옴

// infer를 이용해서 반환 값 타입 똑 떼오기!
type ReturnType2<T> = T extends () => infer R ? R : never;

type A2 = ReturnType2<FuncA>;
type B2 = ReturnType2<FuncB>;
type C2 = ReturnType2<number>; // number는 () => number의 서브타입이 될수 없다. 그러므로 type R을 추론할 수 없게 되어 never가 된다.

/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 함 ->  T extends Promise<any> ? any  : never;
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.  -> T extends Promise<infer R> ? R  : never;

// PromiseA가 number type이 되기를 바람
type PromiseA = PromiseUnpack<Promise<number>>;

// PromiseB가 string type이 되기를 바람
type PromiseB = PromiseUnpack<Promise<string>>;
