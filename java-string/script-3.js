const quote = "I dO nOT lIke gREen eGgS anD HAM";

// 以上のコードは編集しないでください。

// ここにコードを追加
let fixedQuote = quote.toLowerCase();
const firstLetter = fixedQuote.slice(0, 1);
fixedQuote = fixedQuote.replace(firstLetter, firstLetter.toUpperCase());
fixedQuote = fixedQuote.replace("green eggs and ham", "pickled onions");
const finalQuote = `${fixedQuote}.`;

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);