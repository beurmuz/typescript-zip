/**
 * 기본 타입 간의 호환성
 *
 * - 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것이었다.
 */
let num1: number = 10;
let num2: 10 = 10;
/// number type은 number 리터릴 타입보다 더 큰 타입, 즉 Super이므로 upcasting이 가능
num1 = num2; // Number 리터럴 값을 Number Type의 변수에 할당하는 것은 허용된다.

/**
 * 객체 타입간의 호환성
 *
 * -> '어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?'를 판단하는 것
 *
 * - 객체 타입은 프로퍼티를 기준으로 관계를 갖는다.
 *   - TypeScript는 프로퍼티를 기준으로 타입을 정의하는 '구조적 타입 시스템'을 따른다.
 *
 * - 이렇게 객체 타입간의 관계를 정의할 때는 추가 프로퍼티가 있는 type이 서브 타입,
 *   추가 프로퍼티가 더 적은 (=조건이 더 적은) type이 수퍼 타입이 된다.!!
 */
type Animal = {
  // 수퍼 타입
  name: string;
  color: string;
};

type Dog = {
  // 서브 타입
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// Dog type을 Animal type으로 취급하는 것은 가능.
// Dog type이 Animal type으로 가는 Upcasting
animal = dog;

// Animal type을 Dog type으로 취급하는 것(Downcasting)은 불가능.
// -> 사실은 Animal type이 슈퍼 타입이고, Dog type이 서브 타입
// dog = animal; // error

type Book = {
  // 슈퍼
  name: string;
  price: number;
};

type ProgrammingBook = {
  // 서브
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "TypeScript를 공부해!",
  price: 20000,
  skill: "typscript",
};

book = programmingBook;
// programmingBook = book; // error. 다운캐스팅

// Book은 ProgrammingBook 타입으로 업캐스팅할 수 있으니 초기화 시 ProgrammingBook 타입에 맞게 적어도 되는거 아닐까?
// -> 아니다! 변수를 초기화 할 때 초기화 하는 값으로 객체 리터럴을 사용하면 발생하는 '초과 프로퍼티 검사'가 발동된다.
// -> 초과 프로퍼티 검사는 실제 타입에는 정의해놓지 않은 프로퍼티를 작성하면 안되도록 막는 검사를 뜻한다.
let book2: Book = {
  name: "TypeScript를 공부해!",
  price: 20000,
  //   skill: "typscript", // error, 초과 프로퍼티. (실제 타입에는 정의해놓지 않은 프로퍼티)
};

// 초과 프로퍼티 검사를 막으려면?! -> 아래와 같이 작성하면 객체 리터럴을 사용하게 아니라서 허용이 된다.
let book3: Book = programmingBook;

// 함수의 인수로 객체를 전달할 때에도 객체 리터럴로 전달하면 초과 프로퍼티가 발생하기 때문에,
function func(book: Book) {}
func({
  // error
  name: "TypeScript를 공부해!",
  price: 20000,
  //   skill: "typscript", // 초과 프로퍼티 발생
});

// 만약 서브타입 객체를 넣으려고 하면, 객체 리터럴을 이용하는 게 아닌 변수에 저장해뒀다가 인수로 '변수를 전달'해야한다.
func(programmingBook);
