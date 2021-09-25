
var startBtn = document.getElementById('startBtn');
var homePage = document.getElementById('container');
var timer = document.getElementById('time');
var questions = [
    {
        question: 'what color is the sky?',
        choices:['green', 'blue', 'yellow', 'red'],
        answer: 'blue'
    },
    {
        question: 'what color is the ocean?',
        choices:['green', 'blue', 'yellow', 'red'],
        answer: 'blue'
    },
    {
        question: 'what color is the grass?',
        choices:['green', 'blue', 'yellow', 'red'],
        answer: 'green'
    },
    {
        question: 'what color is the fire truck?',
        choices:['green', 'blue', 'yellow', 'red'],
        answer: 'red'
    },
    {
        question: 'what color is the taxi?',
        choices:['green', 'blue', 'yellow', 'red'],
        answer: 'yellow'
    }
]

startBtn.addEventListener("click", function() {
    homePage.setAttribute('style', 'display: none');

    var timeleft = 60;
    var countdown = setInterval (function(){
    document.getElementById("time").textContent = 'Time: ' + timeleft + ' seconds';
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
    }
    }, 1000);

});

function showQuestions(){
    var quest = document.createElement('div');
    quest.append(questions.question);
}
// showQuestions();




// WHEN I click the start button a timer starts and I am presented with a question
    // addEventListener function for timer
    // text should disappear and questions should appear

// WHEN I answer a question I am presented with another question
    //

// WHEN I answer a question incorrectly time is subtracted from the clock
    // if statment subtract time when incorrect answer is clicked

// WHEN all questions are answered or the timer reaches 0 then the game is over
    //

// WHEN the game is over I can save my initials and my score
    // location storage (string)