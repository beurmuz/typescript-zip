// NOTE: ES6(ES2015)
// 클래스 로직. 인스턴스를 만들어주어야 하므로 초기화 메서드 constructor는 필수!
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`이름은 ${name}, 나이는 ${age}살 입니다.`);
  }
}

let p1 = new Person("muz", 26);
console.log(p1);

// NOTE: JS Prototype
// 중복된 코드를 줄이는 방법 -> JS에서 지향하는 프로토타입을 이용한 '상속'
let rapper = { name: "minsik", age: 31 };
// let admin = { name: 'minsik', age: 31, role: 'admin' };
let admin = {}; // 기본 객체 {}가 user를 상속받는 것
admin.__proto__ = user; // prototype 상위에 user 객체를 주겠다!
admin.name;
admin.age;
admin.role = "admin";

let obj = { a: 10 };
obj.hasOwnProperty('a'); // true

// NOTE: Prototype과 class의 관계
// classs는 결국 기존 문법의 보기좋은 코드(syntaxic sugar)
// ES6 전에는 아래와 같이 생성자함수로 class를 만들어서 사용했다.
// class를 사용해도 기존의 Prototype 기반의 상속이 계속 유지되고 있다.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
