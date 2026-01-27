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

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function chooseItem(array) {
    const choice = array[random(0, array.length)];
    return choice;
}

para.textContent = chooseItem(names);