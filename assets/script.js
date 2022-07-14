var myQuestions = [

    {

        question: "What three vegetables make up a mirepoix? ",
        answers: ["Carrots Potatoes Greeen Beans", "Potatoes Cabbage Celery", "Carrots Onions Celery", "Celery Green Beans Carrots"],
        correct: 2

    },
    {
        question: "What is the only food that can never go bad?",
        answers: ["Onions", "Honey", "Coffee beans", "Bread"],
        correct: 1
    },
    {
        question: "Whats the only fruit with seeds on the outside?",
        answers: ["Pineapple", "Kiwi", "Apple", "Strawberry"],
        correct: 3
    },
    {
        question: "Where were french fries invented?",
        answers: ["France", "Spain", "Italy", "Belgium"],
        correct: 3


    },
    {
        question: "What is the only US state where coffee beans are grown?",
        answers: ["Texas", "New Mexico", "Hawaii", "Oregon"],
        correct: 2
    }

];
var scoresArray = [];

var scoresLink = document.getElementById("headerHighScores");
var timerEl = document.getElementById("quizTimeLeft");


var instructionsContainerEl = document.querySelector(".instructionsContainer");
var startQuizBtn = document.querySelector(".startQuiz");
var instructions = document.querySelector(".rulesEl");
var titleEl = document.getElementById(".title");

var questionsContainerEl = document.querySelector(".questionsContainer");
questionsContainerEl.style = "display: none;"
var actualQuestion = document.querySelector(".questionOnPage")

var quizComplete = document.querySelector(".endOfQuiz")
var answerBtns = document.querySelectorAll(".questions")


var ticker = 0;
var timeLeft = 75;


// alert(startQuizBtn)

var beginQuiz = function (e) {
    e.preventDefault()
    questionsContainerEl.style = "display: block;"
    instructionsContainerEl.remove();

    questionsContainerEl.style.display = "block";

    startTimer = setInterval(function () {
        timeLeft--;
        timerEl.innerHTML = "Time:" + timeLeft;
        if (timeLeft < 0) {
            endQuiz();
        }
    }, 1000);

    nextQ();

    // for (let i =0; i < myQuestions[ticker].answers.length; i++)  {
    // var currentAnswer = document.getElementById(i + 1);
    // currentAnswer.textContent = myQuestions[ticker].answers[i];
    // var buttonIndex = i + 1;
    // currentAnswer.addEventListener("click", () => {
    //  answerBtns[0].addEventListener("click", checkAnswer(i + 1))
    //     ;


    // });

    // }
    // nextQuestion();
};


function scoreKeeper() {
    if(myQuestions[0].answers[2]===answerBtns) {
        scoresLink = scoresLink + "10";
    
    }
    else{ timerEl=timerEl-"10";
    
    }
}


function nextQ(e) {
    if (e) {
        e.preventDefault();
        console.log(e);
        console.log(e.target.getAttribute('data-index'));
        console.log("ticker: " + ticker);
        console.log(myQuestions[ticker].correct);
        console.log(parseInt(e.target.getAttribute('data-index')) === myQuestions[ticker].correct);
        ticker = ticker + 1;
    }
    actualQuestion.textContent = myQuestions[ticker].question
    answerBtns[0].textContent = myQuestions[ticker].answers[0]
    answerBtns[1].textContent = myQuestions[ticker].answers[1]
    answerBtns[2].textContent = myQuestions[ticker].answers[2]
    answerBtns[3].textContent = myQuestions[ticker].answers[3]
}


startQuizBtn.addEventListener("click", beginQuiz)
answerBtns[0].addEventListener("click", nextQ);
answerBtns[1].addEventListener("click", nextQ);
answerBtns[2].addEventListener("click", nextQ);
answerBtns[3].addEventListener("click", nextQ);




var nextQuestion = function () {

    var theQuestion = myQuestions[ticker].question;
    actualQuestion.textContent = theQuestion;

    for (let i = 0; i < myQuestions[ticker].answers.length; i++) {
        var currentAnswer = document.getElementById(i + 1);
        currentAnswer.textContent = myQuestions[ticker].answers[i];
    };



};




function checkAnswer(buttonIndex) {

    var correctAnswer = myQuestions[ticker].correct;
    if (correctAnswer === buttonIndex) {
        //    (setTimeout(), 250);
    }
    else {
        // (setTimeout(), 250);
        timeLeft -= 10;
        timerEl.textContent = "Time" + timeLeft;
    }
    if (ticker >= 4) {

        endQuiz();
    }
    else {
        ticker++;
        nextQuestion();
    }
    scoreKeeper();


};
var timerStart;

var endQuiz = function () {
    clearInterval(timerStart);

    questionsContainerEl.remove();
    quizComplete.style.display = "block";

}








