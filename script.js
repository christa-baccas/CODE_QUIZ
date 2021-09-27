var questions = [
  {
    question: "what color is the sky?",
    choices: ["green", "blue", "yellow", "red"],
    answer: "blue",
  },
  {
    question: "what color is the ocean?",
    choices: ["green", "blue", "yellow", "red"],
    answer: "blue",
  },
  {
    question: "what color is the grass?",
    choices: ["green", "blue", "yellow", "red"],
    answer: "green",
  },
  {
    question: "what color is the firetruck?",
    choices: ["green", "blue", "yellow", "red"],
    answer: "red",
  },
  {
    question: "what color is the taxi?",
    choices: ["green", "blue", "yellow", "red"],
    answer: "yellow",
  },
];
var startBtn = document.getElementById("startBtn");
var startScreen = document.getElementById("container");
var header = document.getElementById("header");
var text = document.getElementById("text");
var timer = document.getElementById("time");
var currentQuestion = 0;
var score = 0;
var timeLeft = 60;
var timerId;



startBtn.addEventListener('click', function(){

    //timer is starts once the start button is clicked/
    timerId = setInterval(function () {
      // if (timeLeft >= 1) {
      //   timer.textContent = timeLeft ;
      //   timeLeft--;
      // } else if (timeLeft === 0) {
      //   endGame()
      //   timer.textContent = timeLeft ;
      // }
      timeLeft--;
      timer.textContent = timeLeft

      if(timeLeft <=0){
        endGame()
      }
      }, 1000);

      timer.textContent = timeLeft;
        hideElement()
        showQuestion();
    })


    // hides the header and text once 'start quiz' is clicked
    function hideElement(){
        header.setAttribute("style", "visibility: hidden");
        text.setAttribute("style", "visibility: hidden");
        startBtn.setAttribute("style", "visibility: hidden");
    }

    // container is created for questions
    var questionContainer = document.createElement("div");
    questionContainer.setAttribute("id", "question-container");
    header.appendChild(questionContainer);

    // p is created within the container to show questions
    var displayQuestion = document.createElement("p");
    displayQuestion.setAttribute("id", "question");
    displayQuestion.setAttribute("style", "visibility: visible");
    questionContainer.append(displayQuestion);

    // score being displayed
    var answers = document.createElement('div')
    var stat = document.createElement('p')
    answers.append(stat);
    startScreen.append(answers);

    // stat.textContent = 'score: ' + score + '/5';

    //display questions
    function showQuestion() {

      // loop going through each question 
      // for (let j = 0; j < questions.length; j++) {
        // console.log(questions[currentQuestion].question);
        displayQuestion.textContent = questions[currentQuestion].question;

        //nested loop going through chocies for each question
          for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
              var choiceBtn = document.createElement("button");
              choiceBtn.textContent = questions[currentQuestion].choices[i];
              choiceBtn.setAttribute("type", "button");
              choiceBtn.setAttribute("id", "choiceBtn");
              choiceBtn.setAttribute("style", "visibility: visible");
              choiceBtn.setAttribute("value", questions[currentQuestion].choices[i]);
              displayQuestion.append(choiceBtn);
        
              choiceBtn.onclick = buttonClick;
            }          
      // }

      //selecting an answer
      function buttonClick() {
        if (this.value === questions[currentQuestion].answer) {
            score++;
     
        } else if (this.value !== questions[currentQuestion].answer) {
            timeLeft -= 10;
            timer.textContent = timeLeft
            // console.log("wrong");
          }

          currentQuestion++;

          if(currentQuestion === questions.length ){
            endGame()
          }else{
              showQuestion();
            }            
        // stat.textContent = 'score: ' + score + '/5';
        console.log(currentQuestion);
      }
    }

// if time runs out of user answers all questions
function endGame(){
  displayQuestion.textContent = '';
  var endScreen = document.getElementById('endScreen');
  endScreen.removeAttribute('class');
clearInterval(timerId)

var finalScore = document.getElementById('finalScore');
finalScore.textContent = timeLeft
}

function saveScore(){
  
  var initialInput = document.getElementById('initials').value.trim();
  console.log(initialInput)
  var scores= JSON.parse(localStorage.getItem('highScore')) || [];

  var newScore={
    score: timeLeft,
    initals: initialInput
  }
  scores.push(newScore)
  
  localStorage.setItem('highScore', JSON.stringify(scores))
}

var initialSubmitBtn = document.getElementById('submit');

initialSubmitBtn.addEventListener('click', saveScore)

//store score
// function storeResults(){

// var initalsInput = document.createElement('input');
// var submit =  document.createElement('button');

// localStorage.setItem('')

// }





// //start button to take quiz
// startBtn.addEventListener("click", function () {

//   //this will hide the title, text and button once 'start quiz' is clicked.
//   function hideElement() {
//     header.setAttribute("style", "visibility: hidden");
//     text.setAttribute("style", "visibility: hidden");
//     startBtn.setAttribute("style", "visibility: hidden");
//   }
//   hideElement();


//   //timer is set once the start button is clicked starting at 60 seconds.
//   var timeLeft = 60;
//   setInterval(function () {
//     if (timeLeft >= 1) {
//       timer.textContent = "Time: " + timeLeft + " seconds remaining";
//       timeLeft--;
//     } else if (timeLeft == 0) {
//       displayQuestion.textContent = 'Game Over';
//       timer.textContent = "Time: " + timeLeft + " seconds remaining";
//     }
//   }, 1000);



//   //this container is created for questions to appear after start quiz is clicked
//   var questionContainer = document.createElement("div");
//   questionContainer.setAttribute("id", "question-container");
//   startScreen.appendChild(questionContainer);

//   var displayQuestion = document.createElement("p");
//   displayQuestion.setAttribute("id", "question");
//   displayQuestion.setAttribute("style", "visibility: visible");
//   questionContainer.append(displayQuestion);


  
//   //when the play button is clicked the questions will appear
//   function showQuestion() {

//     for (let j = 0; j < questions.length; j++) {
        
//       displayQuestion.textContent = questions[currentQuestion].question;

//         for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
//             var choiceBtn = document.createElement("button");
//             choiceBtn.textContent = questions[currentQuestion].choices[i];
//             choiceBtn.setAttribute("type", "button");
//             choiceBtn.setAttribute("id", "choiceBtn");
//             choiceBtn.setAttribute("style", "visibility: visible");
//             choiceBtn.setAttribute("value", questions[currentQuestion].choices[i]);
//             displayQuestion.append(choiceBtn);
      
//             choiceBtn.onclick = buttonClick;
//           }          
//     }

//     function buttonClick() {
//       if (this.value === questions[currentQuestion].answer) {
//           score++;
//           currentQuestion++;
//           showQuestion();
//           console.log("correct");
//       } else if (this.value !== questions[currentQuestion].answer) {
//           timeLeft -= 10;
//           currentQuestion++;
//           showQuestion();
//           console.log("wrong");
//       }
//       console.log(currentQuestion);
//     }
//     console.log('score: ' + score + '/5')
//   }
//   showQuestion();
   
// });





// 1. click start
    // - timer start (countdown from 60 sec)
    // - first question appears
// 2. user answer question
    // - if user answer correct:
          // move to the next question
          // increase score count by 1
    // - if user answeres incorrect: 
          // move to next question
          // -10 sec from timer
// 3. end of quiz 
    // time runs out
    // user answers all questions
// 4. scoreboard
    // enter initals 
    // local storage (key: intitals / value: score)