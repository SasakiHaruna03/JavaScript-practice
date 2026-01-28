const buttonBar = document.querySelector(".button-bar");

// ここにコードを追加
function setColor(e) {
    buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}

buttonBar.addEventListener("click", setColor);