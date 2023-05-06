// const loginForm = document.querySelector("#login-form");
// // queryselector 사용할 때는 대상이 id인지 명확히. 왜냐면 classname, tagname 모두 검색이 가능하므로.
// // 또는 const loginFrom = document.getElementById() > 얘는 그럴 필요가 없다 이미 내가 id를 찾고잇는걸 알고잇어서
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// // JS가 loginForm을 찾았다면 그것은 HTML 내의 element라는 뜻
// // 우리는 div 구역, 즉 element를 js로 끌고왔다.

// 이렇게 해도 된다.
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// JS가 loginForm을 찾았다면 그것은 HTML 내의 element라는 뜻
// 우리는 div 구역, 즉 element를 js로 끌고왔다.

function onLoginBtnClick() {
    console.log("Click!!!");
}
loginButton.addEventListener("click", onLoginBtnClick);