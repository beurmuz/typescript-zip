/**
 * NOTE: Type Guard (타입 가드)
 *
 * is를 통해 타입 가드를 구현한다.
 */
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {
    name: "John",
    age: 20,
    skill: "JS",
  };
}
var john = introduce();
// console.log(john.skill) // skill이 없다고 뜸. 왜? => return 값에 있음에도 불구하고 union Type은 타입들의 공통된 속성에만 접근할 수 있기 때문
console.log(john.name); // 얘는 됨

// 타입 단언을 이용한 코드 🐽
if ((john as Developer).skill) {
  console.log((john as Developer).skill); // 타입을 구체화 시켜나감
} else if ((john as Person).age) {
  console.log((john as Person).age); // 타입 단언으로 또 구체화 시켜나감
} // => 계속 이렇게 복잡하고 dirty해짐. 이때 쓰는게 '타입 가드'

// ⭐️타입 가드의 활용⭐️
// 타입 가드 정의: developer인지 걸러내는 타입 가드 함수 만들어보기
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined; // skill이라는 값이 있을 땐 Developer type이다!
}

// 타입 가드를 이용하면 🐽부분의 코드가 이렇게나 깔끔해진다.
if (isDeveloper(john)) {
  console.log(john.skill);
} else {
  console.log(john.age);
}
