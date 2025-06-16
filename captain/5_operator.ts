interface Writer {
  name: string;
  enroll: number;
}

interface Designer {
  name: string;
  skills: Array<string>;
}

// NOTE: Union Type - 인자로 넘기는 타입에 대해 선택지가 생김
// function askSomeone(someone: Writer | Designer) {
//   console.log(someone);
// }
// askSomeone({ name: "작가", enroll: 2024 });
// askSomeone({ name: "디자이너", skills: ["포토샵", "일러스트"] });

// NOTE: intersection Type - 두 타입을 모두 포함하는 새로운 타입을 만든다.
function askSomeone(someone: Writer & Designer) {
  console.log(someone);
}
askSomeone({ name: "작가", enroll: 2024, skills: ["영문 번역", "일어 번역"] });
askSomeone({ name: "디자이너", skills: ["포토샵", "일러스트"], enroll: 2023 });
