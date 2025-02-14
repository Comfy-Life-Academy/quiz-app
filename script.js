document.addEventListener("DOMContentLoaded", () => {
    // クイズのリスト
    const quizData = [
        { question: "最も多く話されている言語は？", choices: ["英語", "中国語", "スペイン語", "ヒンディー語"], answer: "中国語" },
        { question: "日本の首都は？", choices: ["大阪", "京都", "東京", "福岡"], answer: "東京" },
        { question: "地球で一番大きな大陸は？", choices: ["アフリカ", "アジア", "南アメリカ", "ヨーロッパ"], answer: "アジア" },
        { question: "1年にある月の数は？", choices: ["10", "11", "12", "13"], answer: "12" }
    ];

    let currentQuiz = 0;
    let score = 0;

    // HTML要素を取得
    const questionElement = document.querySelector("p");
    const buttons = document.querySelectorAll("button");
    const scoreElement = document.getElementById("score");

    function loadQuiz() {
        let quiz = quizData[currentQuiz];
        questionElement.textContent = quiz.question;
        buttons.forEach((button, index) => {
            button.textContent = quiz.choices[index];
            button.onclick = () => {
                if (button.textContent === quiz.answer) {
                    score++;
                    alert("正解！🎉");
                } else {
                    alert("不正解💦");
                }
                updateScore();
                nextQuiz();
            };
        });
    }

    function nextQuiz() {
        currentQuiz = Math.floor(Math.random() * quizData.length);
        loadQuiz();
    }

    function updateScore() {
        scoreElement.textContent = `スコア: ${score}`;
    }

    // 最初のクイズを読み込む
    loadQuiz();
});
