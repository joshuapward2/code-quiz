var myQuestions = [

    {

        question:  "What three vegetables make up a mirepoix? ",
        answers:  ["Carrots Potatoes Greeen Beans", "Potatoes Cabbage Celery", "Carrots Onions Celery", "Celery Green Beans Carrots" ],
        correct: 3  

    },
    {
        question: "What is the only food that can never go bad?",
         answers: ["Onions", "Honey", "Coffee beans", "Bread"],
        correct: 2
    },
    {
        question: "Whats the only fruit with seeds on the outside?",
        answers: ["Pineapple", "Kiwi", "Apple", "Strawberry"],
        correct: 4
    },
    {
        question: "Where were french fries invented?",
        answers: ["France", "Spain", "Italy", "Belgium" ],
        correct: 4

        
    },
    {
        question: "What is the only US state where coffee beans are grown?",
        answers: ["Texas", "New Mexico", "Hawaii", "Oregon"],
        correct: 3
    }

];
var scoresArray = [];

var scoresLink = document.getElementById("#headerHighScores");
var timerEl = document. getElementById("#quizTimeLeft");


var instructionsContainerEl = document.querySelector(".instructionsContainer");
var startQuizBtn = document.querySelector(".startQuiz");
var instructions = document.querySelector(".rulesEl");
var titleEl = document.getElementById(".title");

var questionsContainerEl = document.querySelector(".questionsContainer");
var actualQuestion = document.querySelector(".questionOnPage")

var quizComplete = document.querySelector(".endOfQuiz")



var ticker = 0;
var timeLeft =75;


var beginQuiz =function() {
    instructionsContainerEl.remove();

    questionsContainerEl.style.display = "block";

    startTimer = setInterval(function() {
        timeLeft --;
        timerEl.textContent = "Time:" + timeLeft;
        if(timeLeft < 0) {
            endQuiz();
        }
    }, 1000);

    for (let i =0; i < myQuestions[ticker].answers.length; i++)  {
        var currentAnswer = document.getElementById(i + 1);
        currentAnswer.textContent = myQuestions[ticker].answers[i];
        var buttonIndex = i + 1;
        currentAnswer.addEventListener("click", () => {
            checkAnswer(i + 1);

        
        });
        
    }
    nextQuestion();


};

var nextQuestion = function()  {

    
    var theQuestion = myQuestions[ticker].question;
    actualQuestion.textContent = theQuestion;

    for (let i =0;i < myQuestions[ticker].answers.length; i++) {
        var currentAnswer = document.getElementById(i + 1);
        currentAnswer.textContent = myQuestions[ticker].answers[i];
    };



};


var checkAnswer = function(buttonIndex) {

    var correctAnswer = myQuestions[ticker].correct;
    if(correctAnswer===buttonIndex) {
       (setTimeout(), 250);
    }
    else {
        (setTimeout(), 250);
        timeLeft -=10;
        timerEl.textContent ="Time"+ timeLeft;
    }
    if (ticker >=4)  {

        endQuiz();
    }
    else {
        ticker++;
        nextQuestion();
    }


    
    
    };
    var timerStart;

    var endQuiz = function() {
        clearInterval(timerStart);

        questionsContainerEl.remove();
        quizComplete.style.display ="block";

    }







