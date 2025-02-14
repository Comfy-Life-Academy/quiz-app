document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", (event) => {
            const answer = "中国語"; // 正解
            if (event.target.textContent === answer) {
                alert("正解！🎉");
            } else {
                alert("不正解💦");
            }
        });
    });
});
