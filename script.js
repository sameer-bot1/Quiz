const quizData = [
    {
        "question": "What is the capital of France?",
        "options": ["New York", "London", "Paris", "Dublin"],
        "answer": "Paris"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
        "answer": "Leonardo Da Vinci"
    },
    {
        "question": "name?",
        "options": ["sameer", "ria", "h", "locket"],
        "answer": "sameer"
    }
];
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const timerContainer = document.getElementById('timer-container');
const restartButton = document.getElementById('restart-button');

let currentQuestion = 0;
let score = 0;
let timer; 
const timePerQuestion = 15; 

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        const question = quizData[currentQuestion];
        questionText.textContent = question.question;
        optionsList.innerHTML = '';

        question.options.forEach((option, index) => {
            const li = document.createElement('li');
            li.textContent = option;
            li.addEventListener('click', () => checkAnswer(option));
            optionsList.appendChild(li);
        });

        startTimer(); 
    } else {
        displayResult();
    }
}

function startTimer() {
    let timeLeft = timePerQuestion;
    timerContainer.textContent = `Time Left: ${timeLeft} seconds`;

    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            checkAnswer(''); 
        } else {
            timerContainer.textContent = `Time Left: ${timeLeft} seconds`;
        }
    }, 1000);
}

function checkAnswer(selectedAnswer) {
    clearInterval(timer); 
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function displayResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultText.textContent = `Your Score: ${score} out of ${quizData.length}`;
    timerContainer.style.display = 'none'; 
}



loadQuestion(); 
