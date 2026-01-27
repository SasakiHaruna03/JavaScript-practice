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

// 以下のコードを更新してください

const shortNames = names.filter((name) => {return name.length < 5;});
para.textContent = shortNames;