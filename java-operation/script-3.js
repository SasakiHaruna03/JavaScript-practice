// 仮説 1: 象はネズミよりも体重が軽い
const eleWeight = 1000;
const mouseWeight = 2;
// 仮説 2: ダチョウはアヒルよりも背が高い
const ostrichHeight = 2;
const duckHeight = 0.3;
// 仮説 3: 2つのパスワードは一致する
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// 以上のコードは編集しないでください。

// ここにコードを追加
const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison
  ? "真 — 象はネズミよりも体重が軽い！？"
  : "偽 — もちろん、象はネズミよりも重いでしょう！";
const heightTest = heightComparison
  ? "真 — ダチョウは確かにアヒルよりも背が高い！"
  : "偽 — どうやら、アヒルはダチョウよりも背が高いようです！？";
const pwdTest = pwdMatch
  ? "真 — パスワードが一致します。"
  : "偽 — パスワードが一致しません。パスワードを確認してください。";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);