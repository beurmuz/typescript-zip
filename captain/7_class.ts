// NOTE: TypeScript에서의 class 문법
class Student {
  // 상단에 멤버변수의 타입을 정의해야 함
  // 타입을 정의하면서 변수의 범위까지 제한 가능
  public name: string;
  private age: number;
  readonly log: string; // 접근만 가능. 값 변경은 불가능

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.log = `이름은 ${name}이고, 나이는 ${age}입니다.`;
  }
}
let num_1 = new Student("selly", 20);
console.log(num_1);
console.log(num_1.log);
