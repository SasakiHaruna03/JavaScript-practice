const btn = document.querySelector("button");

// ここにコードを追加
btn.addEventListener("click", () => {
    if (btn.className === "on") {
        btn.textContent = "マシンはオフです";
        btn.className = "off";
    } else {
        btn.textContent = "マシンはオンです";
        btn.className = "on";
    }
});