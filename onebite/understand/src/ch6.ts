/**
 * 타입 단언 (Type Assertion)
 *
 * casting같은게 아니라, 그냥 ts 컴파일러의 눈을 잠깐 가리는 (그렇게 믿고록 만드는) 정도인 것이다.
 */
type Person = {
  name: string;
  age: number;
};

// {}를 Person 타입으로 간주하라! 라고 단언하는 것
let person = {} as Person;
person.name = "muz";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "치와와",
} as Dog;

/**
 * 타입 단언의 규칙
 *
 * 단언식: '값 as 단언'
 *         A as B 에서
 * - 만약 A가 B의 슈퍼타입이거나,
 *   A가 B의 서브타입이어야만 한다.
 */
let num1 = 10 as never; // 10은 number로 슈퍼타입, never는 모든 type의 서브타입
let num2 = 10 as unknown; // unknown은 모든 type의 슈퍼타입, 10은 number로 서브타입

// let num3 = 10 as string; // error. number type와 string type은 서로 겹치는 값이 없다. (교집합이 없음) -> 서로 슈퍼-서브 타입이 될 수 없음.
// 근데 사실 위의 코드 한줄을 어떻게든 오류가 안나게 성공시키는 방법이 있긴 하다. 바로 아래와 같이 unknown으로 한번 바꾼 후 string으로 바꿔주면 된다.
let num3 = 10 as unknown as string; // 단언 후 또 단언(= 다중 단언)을 한 것이다. number -> unknown -> string

/**
 * const 단언
 *
 * const로 선언한 것과 동일한 효과를 줌
 * 특히 객체 타입과 함께 사용할 때 활용도가 있음
 */
let num4 = 10 as const;

// 객체를 const로 단언하면, 모든 프로퍼티가 읽기 전용이 된다.
let cat = {
  name: "고양이",
  color: "yellow",
} as const;

// cat.name = '야옹이'; // error. 읽기 전용 속성이라 변경 불가능

/**
 * Non Null 단언
 *
 * 어떤 값이 null이거나 undefined이 아니라고 TS 컴파일러에게 알려주는 역할을 한다.
 */
type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티로 정의
};

let post: Post = {
  title: "my name is..",
  author: "muz",
};

// 자동으로 옵셔널체이닝(?.)이 생성된다. -> author가 없으면 자동으로 undefined가 되도록 만들어줌.
// 근데 옵셔널체이닝을 사용하면 해당 값이 아예 undefined가 될 수도 있다. 그 경우 len은 number가 될 수 없는것!
// const len: number = post.author?.length; // error

// 위의 코드는 !로 바꿔 해결할 수 있다. -> 이 값이 null이거나 undefined가 아닐 것이라고 TS 컴파일러가 믿도록 만드는 것!
const len: number = post.author!.length;
