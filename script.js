const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionBox = document.getElementById("questionBox");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-box");
let score = 0;



//timer

var timerId;
var timeEl = document.getElementById("timer");
var time = 40;


function startTimer(){
    timerId = setInterval(clockTick , 1000);

}

function clockTick(){
    time--;
    timeEl.textContent= time;
    if (time <= 0) {
        stopTimer()

    }
};

function decreaseTimer(){
    time = time - 5;
  };



function stopTimer(){
    clearInterval(timerId);
};

startTimer()

//learned this one in a facebook group randomizes the order of questions
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
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
    if (answer.correct) {
      button.classList.add("correct");
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
  const correct = selectedButton.classList.contains("correct");
  console.log(correct)
  if (correct){
    score++
  } else {
    decreaseTimer()
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "your score: " + score;
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
      { text: "HTML, CSS, JS", correct: true },
      { text: "memes, videos, conspiracies", correct: false },
      { text: "fake news, political bs, spam", correct: false },
      { text: "ruby, react, python", correct: false },
    ],
  },
  {
    question: "What does the getElementsByTagName allow you to do",
    answers: [
      { text: "Select elements by their tag name", correct: true },
      { text: "Pull user elements", correct: false },
      { text: "Take user to a different part of the page", correct: false },
      { text: "Reset elements", correct: false },
    ],
  },
  {
    question: "What do functions allow you to do?",
    answers: [
      {
        text:
          "Group a set of related statements together that represent a single task",
        correct: true,
      },
      { text: "Code whilest hungover", correct: false },
      { text: "Compare a set of strings", correct: false },
      { text: "Change the look of a web page", correct: false },
    ],
  },
  {
    question: "In what element do you insert Javascript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<head>", correct: false },
      { text: "<style>", correct: false },
      { text: "<a href>", correct: false },
    ],
  },
  {
    question: 'What does "document represent in "document.write("good luck!")?',
    answers: [
      { text: "Entire web page", correct: true },
      { text: "Main section of web page", correct: false },
      { text: "A side article", correct: false },
      { text: "The web address", correct: false },
    ],
  },
  {
    question:
      "What is the way we write multiple words in the name of a variable called?",
    answers: [
      { text: "camelCase", correct: true },
      { text: "cobraCase", correct: false },
      { text: "turtleCase", correct: false },
      { text: "lammaCase", correct: false },
    ],
  },
  {
    question: "What are true or false values known as?",
    answers: [
      { text: "Booleans", correct: true },
      { text: "Jooleans", correct: false },
      { text: "Dasleans", correct: false },
      { text: "Dataleans", correct: false },
    ],
  },
  {
    question: "What is Jay's favorite food to use in his coding examples?",
    answers: [
      { text: "Tacos", correct: true },
      { text: "Cheeseburgers", correct: false },
      { text: "Sushi", correct: false },
      { text: "Gansitos", correct: false },
    ],
  },
];





// I got this to work but it's super basic and I couldn't in good consious half ass it like this....

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
//alert("correct!");
//} else {
//alert("WRONG!");
// }
//}
//alert("you got " + score + "/" + questions.length
