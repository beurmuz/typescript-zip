/**
 * NOTE: Unknown Type
 *
 * - TypeScript의 모든 Type을 포함한다.
 *   -> '전체 집합'
 *   -> 모든 Type의 슈퍼 Type
 *   -> 모든 Type을 넣을 수 있다. (Upcasting)
 */
function unknownExam() {
  // 값의 Type을 unknown으로 취급하는 'Upcasting'
  let a: unknown = 1; // number를 unknwon에 캐스팅 시킨다.
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // Downcasting
  // unknown Type의 변수는 어떤 type의 변수에도 들어갈 수 없다. (Downcasting이 안돼서)
  let unknownVar: unknown;
  //   let num: number = unknownVar; // error
  //   let str: string = unknownVar; // error
}

/**
 * NOTE: Never Type
 *
 * - 모든 type의 sub type
 * - 모든 집합의 서브 집합 => 즉, '공집합'
 */
function neverExam() {
  // neverFunc이 반환하는 값은 '공집합'
  // (= 반환할 수 있는 값의 종류가 아무것도 없음)
  function neverFunc(): never {
    while (true) {}
  }

  // Upcasting
  let num: number = neverFunc(); // neverFunc()을 number에 업캐스팅 시킨다.
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // Downcasting은 불가능
  // - 그 어떤 값도 never에 다운캐스팅할 수 없다.
  //   let never1: never = 10; // error
  //   let never2: never = "string"; // error
  //   let never3: never = true; // error
}

/**
 * NOTE: Void Type
 *
 * - 반환값이 없는 함수 (= return 문이 없는 함수)
 * - ✅ 놀랍게도 void type은 undefined의 super Type
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  // void type의 변수에는 undefined 값을 넣을 수 있다.
  //   -> ✅ 그렇기 때문에 return이 아예 없는 대신 return undefined를 해도 문제가 없는 것이다!
  // undefined을 void에 업캐스팅
  let voidVar: void = undefined;
}

/**
 * any Type
 *
 * - unknown의 sub Type이지만, any는 '치트키'이다.
 *   -> ✅ any type은 타입 계층도를 완벽히 무시하는 '치트키'
 *   -> 즉, any는 모든 타입의 super type으로 위치하기도 하고,
 *      모든 타입의 sub type으로 위치하기도 한다. (단, sub type일 땐 never만 빼고 해당!)
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 놀랍게도 unknown type이 any type으로 다운 캐스팅 될 수 있다! (오류 X, 허용됨)
  anyVar = unknownVar; // any type의 변수에 unknown type의 값을 넣는 것은 '가능'

  // 또한 undefined type에 any type을 넣는 것 (= 다운 캐스팅)도 가능하다.
  undefinedVar = anyVar;

  // any type도 못하는게 딱 1개 있다.
  // never type에 any type을 다운캐스팅을 하는것은 절대 안된다!
  // -> never는 정말 순수 공집합이기 때문에, 그 어떤 타입도 다운캐스팅 할 수 없다.
  // neverVar = anyVar; // error
}
