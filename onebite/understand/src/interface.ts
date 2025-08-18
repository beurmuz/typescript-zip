/**
 * NOTE: interface
 */

interface Person {
  readonly name: string;
  age?: number;

  // method의 오버로딩을 구현하고 싶은거면, 해당 interface 안에서 호출 시그니처를 사용해야한다.
  sayHi(): void; // 호출 시그니쳐
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "muse",
  age: 20,
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);

/**
 * NOTE: 인터페이스의 확장
 *
 * 상속: 슈퍼타입으로부터 모든 프로퍼티를 물려받는 것
 *
 * - 상속을 받는 인터페이스에서 동일한 프로퍼티를 다시 정의할 수 있음. 단, 재정의 하려는 타입이 원본 타입의 서브 타입이어야 함.
 * ex) 원본: string, 서브: string literal (O)
 * ex1) 원본: number, 서브: string (X)
 *
 * - interface는 객체타입이면 다 확장할 수 있다.
 */

interface Animal {
  name: string;
  color: string;
}

// interface는 type도 상속받을 수 있음 -> 즉, 객체타입이면 다 확장 가능
// type Animal {
//     name: string;
//     color: string;
// }

interface Dog extends Animal {
  //   name: "wawa"; // 이렇게 하면 결과적으로 dog의 name은 string literal type이 된다.
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

/**
 * NOTE: 선언 합침 (선언 머징)
 *
 * - 타입 별칭은 동일한 타입을 두번 정의하려고 하면 오류가 발생한다.
 * - 그러나 인터페이스는 오류가 발생하지 않는다.
 *    -> 동일한 이름으로 선언한 interface들은 결국 다 합쳐지기 때문!
 * - 모듈 보강 상황에 많이 쓴다.
 */
interface Developer {
  name: string;
}

interface Developer {
  // name: number; // 동일한 프로퍼티지만 타입이 다를 경우 '충돌' 발생
  age: number;
}

// 각각의 interface에 정의된 프로퍼티들이 합쳐진 객체 타입으로 정의됨
const developer: Developer = {
  name: "",
  age: 20,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

// 모듈의 타입을 보강..
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
