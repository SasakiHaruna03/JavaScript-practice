let finalResult;
let evenOddResult;

// 以上のコードは編集しないでください。

// ここにコードを追加
const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2;

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `はい、よくできました。` : `いいえ、 ${finalResult} でした。`;
para1.textContent = `finalResult は 48 でしょうか？ ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "finalResult は偶数です。"
    : "finalResult は奇数です。うーん。";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);