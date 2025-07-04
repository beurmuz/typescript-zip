/**
 * 타입 좁히기
 *
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로,
 * 타입을 상황에 따라 좁혀가는 방법
 *
 * 개발을 하다보면 매개변수에 여러 값이 들어올 수 있으며,
 * 이 매개변수의 type에 따라 다르게 동작하는 코드를 작성하는 상황이 잦다.
 * 이 경우 타입 좁히기와 타입 좁히기를 돕는 타입 가드를 사용하면 좋다.
 */

type Person = {
  name: string;
  age: number;
};

// value: number -> toFixed
// value: string -> toUpperCase
// value: Date -> getTime
// value: Person -> name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // 이렇게 조건문과 함께 타입을 좁힐 수 있는 표현들을 '타입 가드'라고 부름
    // 마치 number type 이외에는 이 중괄호 내부에 들어갈 수 없도록 '막는(=가드)' 것 같아서 '타입 가드'다!
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    //   } else if (typeof value === "object") {
    // typeof 연산자는 null 값에 typeof를 해도 object를 반환한다.
    // 그렇기 때문에 Date 객체 뿐만 아니라 null 값도 이 조건문을 통과할 수 있어 에러가 발생한다.
    // 이 경우 typeof 대신 instanceof를 사용하면 된다.
  } else if (value instanceof Date) {
    // instanceof는 왼쪽에 있는 값이 오른쪽에 오는 클래스의 인스턴스냐고 묻는 것. 이때 오른쪽에 type이 들어와서는 안된다.
    console.log(value.getTime()); // typeof를 이용했을 때 value의 type이 Date 객체일 것이라고 보장할 수 없어 error 발생
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
