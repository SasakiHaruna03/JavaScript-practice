let bandInfo;

// 以上のコードは編集しないでください。

// ここにコードを追加
const band = {
    name: "Black Sabbath",
    nationality: "British",
    genre: "heavy metal",
    members: 4,
    formed: 1968,
    split: 2025,
    albums: [
        {
        name: "Black Sabbath",
        released: 1970,
        },
        {
        name: "Paranoid",
        released: 1970,
        },
        {
        name: "Master of Reality",
        released: 1971,
        },
        {
        name: "Vol. 4",
        released: 1972,
        },
    ],
};

bandInfo = `${band.nationality} の ${band.genre} バンドである ${band.name} は ${band.formed} 年から ${band.split} 年の間で活躍しました。最初のアルバム ${band.albums[0].name} は ${band.albums[0].released} 年にリリースされました。`;


// 以下のコードは編集しないでください。

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);