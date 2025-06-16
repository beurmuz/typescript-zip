// enum
enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
  Fila = "휠라",
  Discovery = "디스커버리",
}

let myShoes = Shoes.Discovery;
console.log(myShoes);

enum Answer {
  Yes = "네",
  No = "아니오",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) console.log("정답");
  if (answer === Answer.No) console.log("오답");
}
// askQuestion("Yes"); // enum에서 제공하는 데이터가 아니라 넣을 수 없음
askQuestion(Answer.Yes);
