/**
 * map 메서드
 */
const arr = [1, 2, 3];
const newArr = arr.map((e) => e * 2); // [2, 4, 6];

// map 함수의 내부
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// map 함수의 호출
map(arr, (e) => e * 2);
map(["hi", "hello"], (e) => e.toUpperCase());
map(["1", "2"], (e) => parseInt(e));

/**
 * forEach 메서드
 */
const arr2 = [1, 2, 3];
arr2.forEach((e) => console.log(e));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach(arr2, (e) => {
  console.log(e.toFixed);
});
forEach(["1", "2", "3"], (e) => parseInt(e));
