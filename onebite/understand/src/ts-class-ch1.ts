/**
 * Typescript class
 */

const empolyee = {
  name: "muse",
  age: 20,
  position: "developer",
  work() {
    console.log("일하는중...");
  },
};

class Empolyee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일하는 중 ...");
  }
}

const empolyeeA = new Empolyee("minsik", 32, "FE 개발자");
console.log(empolyeeA);
empolyeeA.work();

// TS의 class는 실제로 타입으로도 활용된다.
// -> TS는 구조적으로 타입을 결정하기 때문이다. (class의 구조를 보고 결정하는 것)
const empolyeeB: Empolyee = {
  name: "ph-1",
  age: 37,
  position: "",
  work() {},
};

// 더 세분화된 class 만들어보기 (with 상속)
class ExecutiveOfficer extends Empolyee {
  // 필드
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
