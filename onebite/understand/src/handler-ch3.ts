/**
 * Mapped Type
 *
 * - 객체 타입을 조작하는 기능
 * - 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 문법
 * - mapped type을 이용하면 하나의 객체로 다양한 상황에 대응할 수 있음
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // Mapped Type 문법
  // 모든 프로퍼티가 선택적 프로퍼티가 되길 원했고, 그걸 구현해주는게 '[]?' 이것!
  [key in "id" | "name" | "age"]?: User[key]; // [key in key 종류]: indexed access type처럼 타입[key]
};

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

// 모든 key를 작성하기 어려울 때 -> keyof 연산자 쓰기
type NumberUser = {
  [key in keyof User]: number;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "민식",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  id: 1,
  name: "민식",
  age: 32,
});
