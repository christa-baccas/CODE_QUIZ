var questions = [
  {
    question: "Where was Kobe born?",
    choices: ["Philadelphia, PA", "Denver, CO", "Harlem, NY", "Austin, TX"],
    answer: "Philadelphia, PA",
  },
  {
    question: "What is Kobe's middle name?",
    choices: ["Mamba", "Bean", "Jarvis", "Kyle"],
    answer: "Bean",
  },
  {
    question: "At six years old, where was Kobe living?",
    choices: ["Brazil", "California", "Italy", "Germany"],
    answer: "Italy",
  },
  {
    question: "How many championships did Kobe win?",
    choices: ["3", "4", "5", "2"],
    answer: "4",
  },
  {
    question: "What college did Kobe go to?",
    choices: ["UT", "Rutgers", "Oregan", "None"],
    answer: "None",
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

startBtn.addEventListener("click", function () {
  //timer is starts once the start button is clicked/
  timerId = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  timer.textContent = timeLeft;
  hideElement();
  showQuestion();
});

// hides the header and text once 'start quiz' is clicked
function hideElement() {
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
var answers = document.createElement("div");
var stat = document.createElement("p");
answers.append(stat);
startScreen.append(answers);


//display questions
function showQuestion() {
  
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
      timer.textContent = timeLeft;
    }

    currentQuestion++;

    if (currentQuestion === questions.length) {
      endGame();
    } else {
      showQuestion();
    }
    stat.textContent = "Total Correct: " + score + "/5";
    console.log(currentQuestion);
  }
}

// if time runs out or user answers all questions the game is ended
function endGame() {
  displayQuestion.textContent = "";
  var endScreen = document.getElementById("endScreen");
  endScreen.removeAttribute("class");
  clearInterval(timerId);

  var finalScore = document.getElementById("finalScore");
  finalScore.textContent = timeLeft;
}

function saveScore() {
  var initialInput = document.getElementById("initials").value.trim();
  // console.log(initialInput)

  // getting the highScore key
  var scores = JSON.parse(localStorage.getItem("highScore")) || [];

  var newScore = {
    score: timeLeft,
    initals: initialInput,
    correct: score,
  };

  //adds data the the newScore variable
  scores.push(newScore);
  // sets the highScore key
  localStorage.setItem("highScore", JSON.stringify(scores));
}

// when the submit button is clicked saveScore function is ran to store data
var SubmitBtn = document.getElementById("submit");
SubmitBtn.addEventListener("click", saveScore);


// view highscore
var viewScore = document.getElementById('score');

viewScore.addEventListener('click', function scoreBoard(){
  console.log("board")
  startScreen.textContent = '';
  var scoresResults = JSON.parse(localStorage.getItem("highScore"))
  console.log(scoresResults)
  viewScore.removeAttribute('class');
  // scoresResults = JSON.parse(localStorage.getItem("highScore"))
  // console.log(scoresResults)

  var orderList = document.getElementById('results') //ul on the html

  for (let j = 0; j < scoresResults.length; j++) {
    var list = document.createElement('li');
    list.textContent = scoresResults[j];
    // orderList.append(list);
    console.log('test');
  }
});


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
