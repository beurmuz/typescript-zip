"use strict";
// Enum Type (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// javascript에는 없고, typescript에만 존재한다
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
Object.defineProperty(exports, "__esModule", { value: true });
// 숫자형 Enum: 각각의 멤버에 값이 숫자가 할당되는 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// 문자열 Enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
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
// enum은 컴파일 결과, 사라지지 않는다.
