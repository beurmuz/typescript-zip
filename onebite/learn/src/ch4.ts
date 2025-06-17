// 1. 타입 별칭 (Type alias)
// : 타입을 변수처럼 정의해서 사용할 수 있음. 공통적으로 적용되어야 할 타입의 경우 이를 이용해 간단히 나타낼 수 있음

// type 타입의이름
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "muz",
  nickname: "muse",
  birth: "90",
  bio: "Hi",
  location: "Seoul",
};

let user2: User = {
  id: 2,
  name: "minsik",
  nickname: "minss",
  birth: "90",
  bio: "good",
  location: "Seoul",
};

// 타입 별칭 선언 시 같은 스코프내에서 타입명이 중복되지 않게끔 조심해야한다.
// 타입 별칭으로 만든 타입들도 당연히 컴파일 시 js 파일에서는 전부 제거된다.

// 2. 인덱스 시그니처
// key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  // [key의 type]: value의 타입
  [key: string]: string;
};

let countryCode: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
  // Japan: "123", // error
};

// 인덱스 시그니처를 사용할 때 주의해야할 점
/**
 * 1. 인덱스 시그니처 타입은 규칙을 위반하지만 않으면 모든 객체를 허용한다. 
 *    let countryNumberCodes: CountryNumberCodes = {}
 *    -> 위의 코드는 아무런 프로퍼티가 없어서 규칙을 위반할 게 없음
 * 
 * 2. 반드시 포함해야할 내용은 type 별칭에 함께 작성해두면 된다.
 *    type CountryNumberCodes = {
        [key: string]: number;
        Korea: number;
        // Korea: string; // error 에러 발생!
      };
      -> 이 경우 Korea 프로퍼티를 반드시 넣어주어야 한다.

      인덱스 시그니처를 사용하는 어떤 객체타입에서 추가적인 프로퍼티를 정의해놓으려면, 
      해당 추가적인 프로퍼티의 value 타입이 반드시 인덱스 시그니처의 value의 타입과 일치하거나 호환되어야 한다!!!
 */
