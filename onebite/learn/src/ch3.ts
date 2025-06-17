// 객체 object
// 객체는 어떻게 타입을 정의해주어야할까? object를 붙이면 될까?
// let user: object = {
//     id: 1,
//     name: 'muse'
// }

// // 타입으로 object를 주는 것은 그냥 '해당 변수는 객체야'라고 하는 것일 뿐, 아무런 정보도 얻을 수 없다.
// user.id;

// 즉, 객체는 '객체 리터럴 타입'을 이용해서 타입을 정의해야 한다. 이때 프로퍼티의 타입도 모두 정의해야 한다.
// 객체의 구조를 기준으로 타입을 정의! -> '구조적 타입 시스템' (= Property Based Type System)
// 반면 C언어나 Java는 이름을 기준으로 타입을 정의한다. 이를 '명목적 타입 시스템'이라고 한다.
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "sikk",
};

user.id;

// 객체를 사용하다보면 가끔 없어도 되는 프로퍼티가 있다. (선택적 프로퍼티 (= 옵셔널 프로퍼티))
let customer: {
  name: string;
  color?: string; // 있어도 되고 없어도 되고~ 있으면 type은 string이어야한다!
} = {
  name: "ph1",
  color: "orange",
};

customer = {
  name: "sikk",
};

// 읽기 전용 프로퍼티: readonly
let config: {
  readonly apiKey: string;
} = {
  apiKey: "dfafkdqwefa",
};
// config.apiKey = "haccef"; // error -> readonly를 이용하면 프로퍼티의 값을 바꿀 수 없다.
