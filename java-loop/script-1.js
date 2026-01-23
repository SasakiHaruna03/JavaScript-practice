const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

// 以上のコードは編集しないでください。

// ここにコードを追加
for (const item of myArray) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
}