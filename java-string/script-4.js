const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

// 以上のコードは編集しないでください。

// Edit the string literal
const myString =
    `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);