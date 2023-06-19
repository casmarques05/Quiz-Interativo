const questions = [
    {
        question: "Qual é a capital da França?",
        choices: ["Paris", "Londres", "Berlim", "Madri"],
        correctAnswer: 0
    },
    {
        question: "Qual é a fórmula química da água?",
        choices: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: 0
    },
    {
        question: "Quem pintou a Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 0
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        choices: ["Júpiter", "Terra", "Marte", "Saturno"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const choice1Text = document.getElementById("choice1-text");
const choice2Text = document.getElementById("choice2-text");
const choice3Text = document.getElementById("choice3-text");
const choice4Text = document.getElementById("choice4-text");
const submitBtn = document.getElementById("submit-btn");
const resultsContainer = document.getElementById("results-container");
const scoreEl = document.getElementById("score");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    choice1Text.textContent = question.choices[0];
    choice2Text.textContent = question.choices[1];
    choice3Text.textContent = question.choices[2];
    choice4Text.textContent = question.choices[3];
}

function checkAnswer() {
    const selectedChoice = document.querySelector("input[name='answer']:checked");
    if (selectedChoice) {
        const selectedAnswer = Number(selectedChoice.id.slice(-1));
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            score++;
        }
        currentQuestion++;
        selectedChoice.checked = false;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

submitBtn.addEventListener("click", checkAnswer);

displayQuestion();
