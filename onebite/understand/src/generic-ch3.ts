/**
 * NOTE: 제네릭 인터페이스
 */

// 하나의 인터페이스로 다양한 타입의 객체를 표현할 수 있음!
// <K, V>는 타입 변수(= 타입 파라미터, 제네릭 타입 변수, 제네릭 타입 파라미터)
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 제네릭 함수와 달리, Type으로 사용할 때 반드시 타입 변수의 타입을 직접 할당해주어야 한다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2"],
};

/**
 * NOTE: 인덱스 시그니쳐
 */
// 특히 객체의 인덱스 시그니쳐 문법과 함께 활용하면 더 유용하다.
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1232,
  key2: 12,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * NOTE: 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * NOTE: 제네릭 인터페이스의 활용 예시
 *
 * - 유저 관리 프로그램
 * -> 유저 구분: 학생 user / 개발자 user
 */
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
    // 제네릭을 활용하면 조건문을 활용한 타입 좁히기 코드가 필요없다.
//   if (user.profile.type !== "student") {
//     console.log("잘못 방문했습니다.");
//     return;
//   }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser: User<Developer> = {
  name: "minsik",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "muse",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};
