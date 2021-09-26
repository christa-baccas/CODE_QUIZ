
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

// start button to start quiz
startBtn.addEventListener("click", function() {

    function hideElement() {
        homePage.setAttribute('style', 'display: none');
    }

        var timeLeft = 60;
        var timeInterval = setInterval(function () {
          if (timeLeft >= 1) {
            timer.textContent = 'Time: ' + timeLeft + ' seconds remaining';
            timeLeft--;
          } else if(timeLeft === 0){
            timer.textContent = 'Time: ' + timeLeft + ' seconds remaining';
            clearInterval(timeInterval);
          } 
        }, 1000);

     hideElement();

});

// var quiz = function (){

//     function showElement(){
//         homePage.innerHTML = questions.question;
//     }
//     showElement();

//     // for (let i = 0; i < questions[0].choices.length; i++) {
//     //     var choiceBtn = document.createElement('button');
//     //     choiceBtn.textContent = questions[0].choices[i];
//     //     choiceBtn.setAttribute('type', 'button');
//     //     choiceBtn.setAttribute('id', 'submitBtn')
//     //     choiceBtn.setAttribute('value', questions[0].choices[i])
//     //     homePage.append(choiceBtn);
//     //     choiceBtn.addEventListener('click', buttonClick);
//     // }

//     // function buttonClick(){
//     //     if(this.value === questions[0].answer){
//     //         console.log("correct")

//     //     }else{
//     //         console.log("wrong");
//     //         timeLeft -= 10;
//     //     }
//     // }

// };    

var newQuestion = function(){

    questions = [Math.floor(Math.random() * questions.length.question)];
}

console.log(newQuestion);













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