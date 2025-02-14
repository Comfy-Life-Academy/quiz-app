document.addEventListener("DOMContentLoaded", () => {
    // クイズデータ
    const quizData = [
        { question: "最も多く話されている言語は？", choices: ["英語", "中国語", "スペイン語", "ヒンディー語"], answer: "中国語" },
        { question: "日本の首都は？", choices: ["大阪", "京都", "東京", "福岡"], answer: "東京" }
    ];

    const fillInData = [
        { question: "日本で一番高い山は？", answer: "富士山" },
        { question: "1年は何ヶ月？", answer: "12" }
    ];

    let currentQuiz = 0;
    let score = 0;
    let questionCount = 0;
    const maxQuestions = 10;

    // HTML要素を取得
    const questionElement = document.querySelector("#question");
    const buttons = document.querySelectorAll("button:not(#retry, #submitAnswer)");
    const scoreElement = document.getElementById("score");
    const retryButton = document.getElementById("retry");

    // 穴埋め問題用
    const fillInQuestionElement = document.getElementById("fill-in-question");
    const answerInput = document.getElementById("answerInput");
    const submitAnswerButton = document.getElementById("submitAnswer");

    function loadQuiz() {
        if (questionCount >= maxQuestions) {
            endGame();
            return;
        }

        // 50%の確率で4択クイズ or 穴埋め問題を出題
        if (Math.random() > 0.5) {
            loadMultipleChoiceQuiz();
        } else {
            loadFillInQuiz();
        }
    }

    function loadMultipleChoiceQuiz() {
        let quiz = quizData[Math.floor(Math.random() * quizData.length)];
        questionElement.textContent = `(${questionCount + 1}/${maxQuestions}) ${quiz.question}`;
        buttons.forEach((button, index) => {
            button.textContent = quiz.choices[index];
            button.style.display = "block"; // 表示
            button.onclick = () => {
                if (button.textContent === quiz.answer) {
                    score++;
                    alert("正解！🎉");
                } else {
   
