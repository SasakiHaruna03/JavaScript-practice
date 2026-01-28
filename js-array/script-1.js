// ここにコードを追加
const myArray = ["apple", "banana", "orange"];
myArray[0] = "grape";
myArray[1] = "peach";
myArray.unshift("pear");

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);