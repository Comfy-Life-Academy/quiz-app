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
    let questionCount = 0;
    const maxQuestions = 10; // クイズの最大数

    // HTML要素を取得
    const questionElement = document.querySelector("#question");
    const buttons = document.querySelectorAll("button:not(#retry)");
    const scoreElement = document.getElementById("score");
    const retryButton = document.getElementById("retry");

    function loadQuiz() {
        if (questionCount >= maxQuestions) {
            endGame();
            return;
        }
        let quiz = quizData[currentQuiz];
        questionElement.textContent = `(${questionCount + 1}/${maxQuestions}) ${quiz.question}`;
        buttons.forEach((button, index) => {
            button.textContent = quiz.choices[index];
            button.onclick = () => {
                if (button.textContent === quiz.answer) {
                    score++;
                    alert("正解！🎉");
                } else {
                    alert("不正解💦");
                }
                questionCount++;
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

    function endGame() {
        questionElement.textContent = `ゲーム終了！あなたのスコア: ${score} / ${maxQuestions}`;
        buttons.forEach(button => button.style.display = "none");
        retryButton.style.display = "block"; // リトライボタンを表示
    }

    function resetGame() {
        score = 0;
        questionCount = 0;
        scoreElement.textContent = "スコア: 0";
        buttons.forEach(button => button.style.display = "block");
        retryButton.style.display = "none";
        loadQuiz();
    }

    // リトライボタンにリセット機能を追加
    retryButton.addEventListener("click", resetGame);

    // 最初のクイズを読み込む
    loadQuiz();
});
