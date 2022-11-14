const quizData = [
    {
    question: "قدیمی ترین آثار سفالی جهان در کجا جهان پیدا شده است ؟",
    a: "آمریکا",
    b: "ایران",
    c: "چین",
    d: "فرانسه",
    correct: "c",
    },
    {
    question: "علی دایی به کدام تیم ایتالیایی گل زده است ؟ ",
    a: "تاتنهام",
    b: "چلسی",
    c: "ناپولی",
    d: "آث میلان",
    correct: "d",
    },
    {
    question: "واحد پول کشور ژاپن کدام است؟",
    a: "یوان",
    b: "یِن",
    c: "تاکا",
    d: "لیر",
    correct: "b",
    },
    {
    question: "چند درصد بدن ما آب است؟",
    a: "درصد30",
    b: "درصد60",
    c: "درصد50",
    d: "درصد10",
    correct: "b",
    },
    {
        question: "کدام درخت نماد صلح است؟ ",
        a: "زیتون",
        b: "گردو",
        c: "بادام",
        d: "سرو",
        correct: "a",
        },
        {
            question: "کدام درخت نماد صلح است؟ ",
            a: "زیتون",
            b: "گردو",
            c: "بادام",
            d: "سرو",
            correct: "a",
            },
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
    const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
    };
    const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
    quiz.innerHTML = `
    <h2>شما به ${score}/${quizData.length} جواب درست داده اید</h2>
    <button onclick="history.go(0)">اجرای دوباره</button>
    ` // location.reload() won't work in CodePen for security reasons;
    }
    }
    });