/**
 * 함수 타입의 호환성
 *
 * 특정 함수 타입을 다른 함수 타입을 취급해도 괜찮은가를 판단하는 것이다.
 * 2가지의 checkList가 있다.
 *   1. 반환값의 타입이 호환되는가?
 *      - 반환값이 기준일 때는 '다운 캐스팅(서브 = 슈퍼)'이 안된다.
 *   2. 매개변수의 타입이 호환되는가?
 *      - 매개변수가 기준일 때는 '업 캐스팅(슈퍼 = 서브)'이 안된다.
 */

// 기준 1) 반환 값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ok. (포괄적인애) = (세부적인애). (= 업캐스팅)
// b = a; // error. b에 a를 할당하겠다는 것은, Type A(number type)를 Type B(number 리터럴 type)에 할당하겠다는 뜻과 같다. (= 다운 캐스팅)

// 기준 2) 매개변수가 호환되는가?
//   2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // error. 변수 c에 변수 d를 넣겠다는 건, D타입을 C타입으로 취급하겠다는 말과 똑같은 것이다.
// 즉, number 리터럴 타입을 number 타입으로 취급하겠다는 말인 '업캐스팅'을 하겠다는건데.. 에러가 발생하는 것이다!
// ! 매개변수의 타입을 기준으로 호환성을 판단할 때에는 '업캐스팅'일 때 호환이 안된다고 평가한다.
d = c; // 얘는 number 타입을 number 리터럴 타입으로 취급하겠다는 말인 '다운캐스팅'을 하겠다는 뜻.
// 놀랍게도 다운 캐스팅은 허용된다. 왜..? 객체 타입을 정의할때를 생각해보면 빠르게 이해할 수 있다.

type Animal = {
  // 슈퍼 타입
  name: string;
};

type Dog = {
  // 서브 타입
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // error. dog type에서 animal type으로 업캐스팅 되는 상황인데, 에러가 발생한다! 그 이유는 아래의 함수를 통해 이해할 수 있다.
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // error. 당연하다. Animal에는 color 프로퍼티가 없기 때문!
};

dogFunc = animalFunc; // ok.
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//   2-2. 매개변수의 개수가 다를 때
//   할당 하려고 하는 함수 타입의 매개변수 개수가 적을때에만 호환이 된다.
type Func1 = (a: number, b: number) => void; // 슈퍼
type Func2 = (a: number) => void; // 서브

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ok. func2 타입을 func1 타입으로 취급하겠다! (func1의 매개변수 개수가 1이라 2에 포함 가능)
// func2 = func1; // error.
