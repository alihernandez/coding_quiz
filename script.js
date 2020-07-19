const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionBox = document.getElementById("questionBox");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-box");

//worked though this with tutor
var timerId;
var timeEl = document.getElementById("timer");
var time = 120;

function startTimer() {
  timerId = setInterval(clockTick, 1000);
}

function clockTick() {
  time--;
  timeEl.textContent = time;
  if (time <= 0) {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(timerId);
}

startTimer();

//learned this one in a facebook group
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionBox.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.corret) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstElementChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

var questions = [
  {
    question: "What are the three building blocks of the web?",
    answers: [
      { text: "HTML, CSS, JS", Correct: true },
      { text: "memes, videos, conspiracies", Correct: false },
      { text: "fake news, political bs, spam", Correct: false },
      { text: "ruby, react, python", Correct: false },
    ],
  },
  {
    question: "What does the getElementsByTagName allow you to do",
    answers: [
      { text: "Select elements by their tag name", Correct: true },
      { text: "Pull user elements", Correct: false },
      { text: "Take user to a different part of the page", Correct: false },
      { text: "Reset elements", Correct: false },
    ],
  },
  {
    question: "What do functions allow you to do?",
    answers: [
      {text:"Group a set of related statements together that represent a single task", Correct: true,},
      { text: "Code whilest hungover", Correct: false },
      { text: "Compare a set of strings", Correct: false },
      { text: "Change the look of a web page", Correct: false },
    ],
  },
  {
    question: "In what element do you insert Javascript?",
    answers: [
      { text: "<script>", Correct: true },
      { text: "<head>", Correct: false },
      { text: "<style>", Correct: false },
      { text: "<a href>", Correct: false },
    ],
  },
  {
    question: 'What does "document represent in "document.write("good luck!")?',
    answers: [
      { text: "Entire web page", Correct: true },
      { text: "Main section of web page", Correct: false },
      { text: "A side article", Correct: false },
      { text: "The web address", Correct: false },
    ],
  },
  {
    question:
      "What is the way we write multiple words in the name of a variable called?",
    answers: [
      { text: "camelCase", Correct: true },
      { text: "cobraCase", Correct: false },
      { text: "turtleCase", Correct: false },
      { text: "lammaCase", Correct: false },
    ],
  },
  {
    question: "What are true or false values known as?",
    answers: [
      { text: "Booleans", Correct: true },
      { text: "Jooleans", Correct: false },
      { text: "Dasleans", Correct: false },
      { text: "Dataleans", Correct: false },
    ],
  },
  {
    question: "What is Jay's favorite food to use in his coding examples?",
    answers: [
      { text: "Tacos", Correct: true },
      { text: "Cheeseburgers", Correct: false },
      { text: "Sushi", Correct: false },
      { text: "Gansitos", Correct: false },
    ],
  },
];

for(var i = 0; i < questions.length; i++){
 var answer = window.answer(questions[i].prompt);
if(answer == questions[i].answer){
score++;
alert("Correct!");
} else {
alert("WRONG!");
 }
}
alert("you got " + score + "/" + questions.length);

var score = 0;

//var questions = [
//{
//prompt: "What are the three building blocks of the web?\n(a) memes, videos, conspiracies\n(b) HTML, CSS, JS\n",
//answer: "b"//
//},
//{
//prompt: "What does the getElementsByTagName allow you to do?\n(a) change the name of an element\n(b) select elements using their tag name\n(c) get the tag of an id",
//answer: "b"//
//},
//{
//prompt: "What do functions allow you to do?\n(a) compare date\n(b) group a set of related statements together that represent a single task.\n(c) group a set of strings to set off an event",
//answer: "b"//
//}
//];

//for(var i = 0; i < questions.length; i++){
// var response = window.prompt(questions[i].prompt);
//if(response == questions[i].answer){
//score++;
//alert("Correct!");
//} else {
//alert("WRONG!");
// }
//}
//alert("you got " + score + "/" + questions.length);
