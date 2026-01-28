const quoteStart = "Don't judge each day by the harvest you reap ";

// ここにコードを追加
const quoteEnd = "but the seeds that you plant.";
const finalQuote = `${quoteStart}${quoteEnd}`;

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);