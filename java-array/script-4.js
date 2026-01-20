const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// ここにコードを追加
const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);

function startsWithE(bird) {
  return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);