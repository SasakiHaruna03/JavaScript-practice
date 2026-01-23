const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
    { name: "Chris", number: "1549" },
    { name: "Li Kang", number: "9634" },
    { name: "Anne", number: "9065" },
    { name: "Francesca", number: "3001" },
    { name: "Mustafa", number: "6888" },
    { name: "Tina", number: "4312" },
    { name: "Bert", number: "7780" },
    { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

// 以上のコードは編集しないでください。

// ここにコードを追加
for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
        para.textContent = `${phonebook[i].name} の電話番号は ${phonebook[i].number} です。`;
        break;
    }

    if (i === phonebook.length - 1) {
        para.textContent = "電話帳に名前が見つかりません";
    }
}