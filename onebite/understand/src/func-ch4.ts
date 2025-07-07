/**
 * 사용자 정의 타입가드
 * 
 * 함수를 타입 가드로 만들어 주는 것
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// TS는 직접 만든 함수의 반환값을 가지고 타입을 좁혀주지 않는다.
// 이 경우 함수 자체를 타입 가드 역할을 하도록 만들어주면 된다.
// 아래와 같이 true가 반환될 경우, 반환값 타입은 Dog라고 작성해주면 된다.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else if (isCat(animal)) {
    animal;
  }
}
