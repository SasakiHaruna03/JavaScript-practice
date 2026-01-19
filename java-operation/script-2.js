// Final result should be 4633.33

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

// ここにコードを追加
result *= result2;
const finalResult = result.toFixed(2);
const finalNumber = Number(finalResult);

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `finalResult は ${finalResult} です。`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber は数値型です。よくできました！"
    : `残念！ finalNumber は数値ではありません。`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);