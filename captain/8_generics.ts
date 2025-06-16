// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('HI');

// NOTE: Generic의 사용
// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }
// // 함수를 호출하는 시점에 인자의 타입을 지정하면서 넘길 수 있다.
// logText<string>('하이');

// NOTE: 기존 타입 정의 방식과 제네릭의 차이점?
// function logText(text) {
//   console.log(text);
//   return text;
// }

// 1) 타입을 정의하지 않았으므로 어떤 값이든 인자로 넣을 수 있다. (any)
// logText("a");
// logText(10);
// logText([]);

// 2) 다른 타입을 받기 위해 중복으로 선언된 함수
// - 아래의 두 함수는 파라미터의 타입과 return 타입만 다르고, 그 구조는 같음
// function logNum(num: number) {
//   console.log(num);
//   return num;
// }

// function logBool(bool: boolean) {
//   console.log(bool);
//   return bool;
// }

// 제네릭 사용해보기
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

let inputs = logText<string>("say Hi");
console.log(inputs.split(""));
// logText<string>(10); // Type이 달라서 불가능

let login = logText<boolean>(true);
logText<number>(7);

// NOTE: 인터페이스에 제네릭 선언하기
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = {
//   value: 'abc',
//   selected: true;
// }

interface Dropdown<T> {
  value: T;
  selected: T;
}
const obj: Dropdown<string> = {
  value: "abc",
  selected: "False",
};

// NOTE: 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach((text) => console.log(text));
//   return text;
// }
// logTextLength<string>(["hi", "hello", "bye", "say goodbye"]);

// NOTE: 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}
logTextLength("a");
logTextLength(10); // number는 length를 제공하지 않음
logTextLength({ nums: 10 }); // 불가능
logTextLength({ length: 10 }); // 가능

// NOTE: 제네릭 타입 제한
interface ShoppingItem {
  brand: string;
  name: string;
  stock: number;
  price: number;
}

// ShoppingItem에 있는 Key들 중, 1가지가 바로 T(타입)이 될 것
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption(10); // X
getShoppingItemOption<string>("adidas"); // X
getShoppingItemOption("name"); // 4개중 한개를 했으니 ok
getShoppingItemOption("price"); // ok
