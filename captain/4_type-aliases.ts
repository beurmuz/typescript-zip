// interface man {
//   name: string;
//   age: number;
// }

type man = {
  name: string;
  age: number;
};

let wooni: man = {
  name: "newnni",
  age: 29,
};

// NOTE: type은 타입을 정의할 수 있는 모든 곳에 별칭을 붙일 수 있음
type nameString = string;
let newName: nameString = "selly";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

function getTodo(todo: Todo) {
  console.log(`해야할 일: ${todo.title}  |  완료 여부: ${todo.done}`);
}
getTodo({
  id: "1",
  title: "운동하기",
  done: true,
});
