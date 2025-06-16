/**
 * NOTE: 타입 단언 (Type Assertion)
 *
 * DOM API를 조작할 때 가장 많이 사용함.
 * ts에게 개발자가 더 타입을 잘 알고 있으니, 내가 정의한 타입으로 간주하라고 하는 것
 *
 * ex) var c = a as string;
 */
var a;
a = 20;
a = "a";
var b = 10;
// var c = a; // any
var c = a as string; // 타입 단언

// DOM API 조작
// <div id="app">hi</div>

var app = document.querySelector("#app");
var div = document.querySelector("div");
if (div) {
  div.innerHTML;
}
div?.innerText;
