// Enum Type (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// javascript에는 없고, typescript에만 존재한다
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// 숫자형 Enum: 각각의 멤버에 값이 숫자가 할당되는 enum
enum Role {
  ADMIN, // 사실 TS는 굳이 숫자를 할당하지 않아도, 자동으로 0, 1, 2가 할당된다. 만약 ADMIN에만 10을 할당하면, 나머지는 자동으로 11, 12가 할당된다.
  USER,
  GUEST,
}

// 문자열 Enum
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "A",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};

const user2 = {
  name: "B",
  role: Role.USER, // 1 <- 일반 유저
  language: Language.english,
};

const user3 = {
  name: "C",
  role: Role.GUEST, // 2 <- 게스트
  language: Language.english,
};

console.log(user1, user2, user3); // { name: 'A', role: 0 } { name: 'B', role: 1 } { name: 'C', role: 2 }

// NOTE: enum은 컴파일 결과, 사라지지 않고 javascript의 객체로 변환된다.
