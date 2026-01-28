const cat = {
    name: "Bertie",
    breed: "Cymric",
    color: "white",
    greeting: function () {
        console.log("Meow!");
    },
};

// 以上のコードは編集しないでください。

// ここにコードを追加
const catName = cat["name"];
cat.greeting();
cat.color = "black";

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `この猫の名前は ${catName} です。`;
para2.textContent = `この猫の色は ${cat.color} です。`;
section.appendChild(para1);
section.appendChild(para2);