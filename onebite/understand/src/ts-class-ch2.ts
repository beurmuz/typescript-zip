/**
 * NOTE: 접근 제어자 (Access modifier)
 * : class를 만들때 특정 필드나 메서드에 접근하는 범위를 결정하는 것
 *
 * -> public private protected
 *
 * - private으로 설정된 필드는 파생(상속받은 애) 클래스에서조차 접근할 수 없게 된다.
 *   -> 만약 파생 클래스에서 접근하고 싶다면 proteced를 사용하면 된다.
 */

class Empolyee {
  // 필드
  private name: string;
  protected age: number;
  position: string;

  // 생성자
  // 생성자의 매개변수에다가도 접근 제어자를 달 수 있다. 단, 그 경우 필드 정의는 생략해야한다.
  // 매개변수에 접근 제어자를 달 경우 자동으로 필드도 정의하고, 필드의 값도 초기화 한다.
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  // name이 private이어도 내부에서는 접근 가능
  work() {
    console.log(`${this.name}는(은) 현재 업무중 입니다..`);
  }
}

const e_1 = new Empolyee("minsik", 32, "developer");
// 객체이기도 하고, 클래스 내 각각의 필드의 접근 제어자가 기본적으로 public이기 때문이다.
// e_1.age = 31; // 외부에서는 접근할 수 없게 막힘
// e_1.name = "SIK-K"; // private은 점 표기법으로 접근, 읽기, 수정 불가능!
console.log(e_1["name"]); // 얘로는 읽을 순 있음

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

  // 메서드
  func() {
    // this.name; // 접근 불가!
    this.age; // 접근 가능
  }
}
