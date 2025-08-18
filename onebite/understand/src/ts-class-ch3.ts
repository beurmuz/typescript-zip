/**
 * 인터페이스와 클래스
 *
 * - 라이브러리의 구현이나 복잡하고 정교한 프로그래밍을 할 때는 interface로 설계도를 구현하는 과정도 있다!
 */

// interface는 무조건 public 필드만 정의할 수 있다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// Character 클래스는 CharacterInterface를 구현한다.
// CharacterInterface는 class의 설계도 역할을 한다!
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동중!`);
  }
}
