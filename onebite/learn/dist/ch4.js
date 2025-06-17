"use strict";
// 타입 별칭
// : 타입을 변수처럼 정의해서 사용할 수 있음. 공통적으로 적용되어야 할 타입의 경우 이를 이용해 간단히 나타낼 수 있음
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    id: 1,
    name: "muz",
    nickname: "muse",
    birth: "90",
    bio: "Hi",
    location: "Seoul",
};
let user2 = {
    id: 2,
    name: "minsik",
    nickname: "minss",
    birth: "90",
    bio: "good",
    location: "Seoul",
};
// 타입 별칭 선언 시 같은 스코프내에서 타입명이 중복되지 않게끔 조심해야한다.
// 타입 별칭으로 만든 타입들도 당연히 컴파일 시 js 파일에서는 전부 제거된다.
