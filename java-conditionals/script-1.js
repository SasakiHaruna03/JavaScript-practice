let season = "summer";
let response;

// ここにコードを追加

if (season === "summer") {
    response = "It's probably nice and warm where you are; enjoy the sun!";
} else if (season === "winter") {
    response = "I hope you are not too cold. Put some warm clothes on!";
} else {
    response =
    "I don't know what the season is where you are. Hope you are well.";
}

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);