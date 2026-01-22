let response;
let score = 75;
let machineActive = false;

// ここにコードを追加
if (machineActive) {
    if (score < 0 || score > 100) {
        response = "ありえません。エラーが発生しました。";
    } else if (score >= 0 && score < 20) {
        response = "ひどい点数だ。完全に失敗だ！";
    } else if (score >= 20 && score < 40) {
        response =
        "いくらか知っているようだが、かなり悪い点数だ。改善が必要だ。";
    } else if (score >= 40 && score < 70) {
        response = "悪くない仕事をしましたね！";
    } else if (score >= 70 && score < 90) {
        response = "素晴らしい点数だ、実によく分かっている";
    } else if (score >= 90 && score <= 100) {
        response = "すごい点数だね。カンニングしてない？本当？";
    }
    } else {
    response = "マシンの電源がオフになっています。電源を入れてスコアを処理してください。";
}

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);