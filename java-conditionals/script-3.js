let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// ここにコードを追加
if (machineActive) {
    machineResult = "スイッチがオンになっています";
    pwdResult =
        pwd === "cheese"
            ? "ログインに成功しました"
            : "ログインに失敗しました";
} else {
    machineResult = "スイッチがオフになっています";
}

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);