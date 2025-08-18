/**
 * Class
 *
 * - 똑같은 객체를 마치 공작에서 찍어내도록 만들어주는 문법
 * - 객체를 만드는 틀
 */

let studentA = {
  name: "minsik",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부중");
  },
  introduce() {
    console.log(`안녕하세요. ${this.name} 입니다.`);
  },
};
// console.log(studentA.introduce());

class Student {
  // 필드: 클래스가 만들어낼 객체 프로퍼티
  name;
  grade;
  age;

  // 생성자: 클래스를 호출하면 실제로 객체를 생성하는 역할을 하는 메서드.
  constructor(name, grade, age) {
    // 실제로 만들 객체의 프로퍼티 값으로 설정해주기
    this.name = name;
    this.grade = grade;
    this.age = age;
    // this는 지금 생성하고 있는 객체를 가리킨다.
  }

  // 메서드
  study() {
    console.log("열심히 공부중");
  }

  introduce() {
    console.log(`안녕하세요. ${this.name} 입니다.`);
  }
}

// new 키워드: 객체를 만들어라~
// ()안에는 인수를 전달해 constructor가 실행됨
// 클래스를 이용해 만든 객체 -> 인스턴스 라고 부름. 즉, Student Instance
let a = new Student("minsik", "A+", 32);
console.log(a);
a.introduce();

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // super를 하면 부모클래스의 생성자가 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`주 언어는 ${this.favoriteSkill} 입니다.`);
  }
}

let b = new StudentDeveloper("ph-1", "A+", 37, "TS");
console.log(b);
b.programming();
