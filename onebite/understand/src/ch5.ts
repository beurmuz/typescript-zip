/**
 * 타입 추론
 *
 * - Typescript는 점진적 타입 시스템이다. 즉, TypeScript가 알아서 변수의 초기값을 보고 타입을 추론한다는 뜻이다.
 *   그렇지만 항상 추론을 잘하는 것은 아니다. 특히 함수를 선언할 때, 매개변수의 타입을 직접 정의해주지 않으면 TS가 추론할 수 없다.
 */
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "qqen",
  profile: {
    nickname: "q",
  },
  urls: ["https://naver.com"],
};

// 구조분해 할당하는 경우에도 잘 추론한다!
let { id, name, profile } = c;
let [d, e, f] = [1, "str", true];

// 함수의 반환값을 추론할 때는 return문에 오는 값을 이용한다.
function func() {
  return "hello";
}

/**
 * 당황스러운 추론 상황들
 */

// 1. any 타입의 진화 -> 그치만 사실 암묵적인 any type으로 인한 any type의 진화가 좋은건 아니다.. 명확히 명시해주는게 짱!
let g; // ✅'암묵적인 any type' -> 이 경우 변수에 들어오는 값에 따라 any type이 계속 진화한다.
g = 10; // any -> 이후 number로 진화
g.toString(); // number
g = "hello"; // any -> 이후 string으로 진화
g.toUpperCase(); // string

// 1-1. any type으로 지정해주면, 그냥 모든 라인에서 any가 된다.
let h: any;
h = 10; // any
h.toString(); // any
h = "a"; // any
h.toUpperCase(); // any

// 2. const로 변수 만들기
//  - let으로 변수를 선언했을 땐 number로 추론됐지만, const로 선언할 경우 아예 number 리터럴 값으로 추론된다.
//    -> const로 선언한 변수는 어차피 상수이기 때문에 앞으로 10 이외에 다른 값을 담을 일은 없다. 그래서 그냥 넘버 리터럴 타입으로 추론이 되는 것!
const num = 10; // 10
const str = "hello"; // hello (string 리터럴 type)

// 3. 여러가지 type의 요소를 저장하는 배열의 경우
//   - Typescript가 모든 배열 요소들의 type을 비교해서 최적의 공통 type으로 추론한다.
let arr = [1, "string~"]; // (string | number)[] -> Union Type으로 자동 추론

/**
 * 타입 넓히기
 *
 * - typescript가 타입을 범용적으로, 좀 더 넓게 추론해주는 것
 */
