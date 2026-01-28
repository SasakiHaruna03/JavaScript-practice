let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
}
// 以上のコードは編集しないでください。

// ここにコードを追加
do {
    if (isPrime(i)) {
        para.textContent += `${i}, `;
    }
    i--;
} while (i > 1);

// 以下のコードは編集しないでください。

section.appendChild(para);