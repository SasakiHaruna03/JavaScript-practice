const names = [
    "Chris",
    "Li Kang",
    "Anne",
    "Francesca",
    "Mustafa",
    "Tina",
    "Bert",
    "Jada",
];
const para = document.querySelector("p");

// 以上のコードは編集しないでください。

// ここにコードを追加
function chooseName() {
    const randomNumber = Math.floor(Math.random() * names.length);
    const choice = names[randomNumber];
    para.textContent = choice;
}

chooseName();