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
    question: "what color is the fire truck?",
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



//start button to take quiz
startBtn.addEventListener("click", function () {

  //this will hide the title, text and button once 'start quiz' is clicked.
  function hideElement() {
    header.setAttribute("style", "visibility: hidden");
    text.setAttribute("style", "visibility: hidden");
    startBtn.setAttribute("style", "visibility: hidden");
  }
  hideElement();


  //timer is set once the start button is clicked starting at 60 seconds.
  var timeLeft = 60;
  setInterval(function () {
    if (timeLeft >= 1) {
      timer.textContent = "Time: " + timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft == 0) {
      displayQuestion.textContent = 'Game Over';
      timer.textContent = "Time: " + timeLeft + " seconds remaining";
    }
  }, 1000);



  //this container is created for questions to appear after start quiz is clicked
  var questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question-container");
  startScreen.appendChild(questionContainer);

  var displayQuestion = document.createElement("p");
  displayQuestion.setAttribute("id", "question");
  displayQuestion.setAttribute("style", "visibility: visible");
  questionContainer.append(displayQuestion);


  
  //when the play button is clicked the questions will appear
  function showQuestion() {

    for (let j = 0; j < questions.length; j++) {
        
      displayQuestion.textContent = questions[currentQuestion].question;

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
    }

    function buttonClick() {
      if (this.value === questions[currentQuestion].answer) {
          score++;
          currentQuestion++;
          showQuestion();
          hideQuestions()
          console.log("correct");
      } else if (this.value !== questions[currentQuestion].answer) {
          timeLeft -= 10;
          currentQuestion++;
          showQuestion();
          hideQuestions()
          console.log("wrong");
      }
      console.log('score' + score);
      console.log(currentQuestion);
    }
  }
  showQuestion();
   
  function hideQuestions(){
    if(questions.length == true){
      return console.log('done');
    }
  }
  hideQuestions()
});














// WHEN I click the start button a timer starts and I am presented with a question

// WHEN I answer a question I am presented with another question

// WHEN I answer a question incorrectly time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0 then the game is over

// WHEN the game is over I can save my initials and my score
