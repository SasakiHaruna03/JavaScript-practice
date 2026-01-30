const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

    fetch(requestURL)
    .then((response) => response.text())
    .then((text) => displayCatInfo(text));

    // 以上のコードは編集しないでください。

    function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // ここにコードを追加
    const cats = JSON.parse(catString);

    for (let i = 0; i < cats.length; i++) {
        for(const kitten of cats[i].kitten) {
            total++;
            if (kitten.gender === "m") {
                male++;
            }
        }
        if (i < cats.length - 1){
            motherInfo += `${cats[i].name},`;
        } else {
            motherInfo `and ${cats[i].name}.`;
        }
    }

    kittenInfo = `全部で ${total} 匹の子猫がいます。オスは ${male} 匹でメスは ${
    total - male} 匹です。`;

    // 以下のコードは編集しないでください。

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}