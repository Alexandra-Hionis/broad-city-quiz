// Grab all elements
const startInstructionsButton = document.getElementById(
  "start-instructions-button"
);
const startQuizButton = document.getElementById("start-quiz-button");
const welcomeContainer = document.getElementById("welcome-container");
const instructionsContainer = document.getElementById("instructions-container");
const questionContainer = document.getElementById("question-container");
let individualQuestion = document.getElementById("question");
let answerContainer = document.getElementById("answers-container");
let answerOption1 = document.getElementById("answer-option1");
let answerOption2 = document.getElementById("answer-option2");
let answerOption3 = document.getElementById("answer-option3");
let answerOption4 = document.getElementById("answer-option4");
const submitBtn = document.getElementById("submitQuestion");
const nextBtn = document.getElementById("nextQuestion");
let answers = document.querySelectorAll(".answers");
let questionTracker = document.getElementById("question-tracker");
let feedbackMessage = document.getElementById("feedback-message");
const quizCompleteContainer = document.getElementById(
  "completed-quiz-container"
);

// Define selected answer
let selectedAnswer;

// fire instructions
startInstructionsButton.onclick = function () {
  startInstructionsButton.classList.add("active");
  if (startInstructionsButton.classList.contains("active")) {
    welcomeContainer.style.display = "none";
    instructionsContainer.style.display = "block";
  }
};

// fire questions
startQuizButton.onclick = function () {
  startQuizButton.classList.add("active");
  if (startQuizButton.classList.contains("active")) {
    instructionsContainer.style.display = "none";
    questionContainer.style.display = "block";
  }
};

// Questions
const quizQuestions = [
  {
    question: "How does Ilana describe her perfect man?",
    option1: "Someone who can cook and is good with kids",
    option2: "A mix of Barack Obama and Drake",
    option3: "A billionaire with a yacht and a pet giraffe",
    option4: "A mime who only communicates in interpretive dance",
    correctAnswer: "A mix of Barack Obama and Drake",
  },
  {
    question:
      "When Abbi and Ilana go to a fancy restaurant for Abbi's 26th birthday, Ilana has an allergic reaction to what?",
    option1: "Wine",
    option2: "Peanuts",
    option3: "Shellfish",
    option4: "Soap",
    correctAnswer: "Shellfish",
  },
  {
    question:
      "What famous person did Abbi assist Trey in training at Soulstice?",
    option1: "Shania Twain",
    option2: "Hilary Clinton",
    option3: "Oprah",
    option4: "Tina Fey",
    correctAnswer: "Shania Twain",
  },
  {
    question:
      "Abbi gets her wisdom teeth out and hallucinates a blue creature named ____?",
    option1: "Bingo Bronson",
    option2: "Teal Tommy",
    option3: "Blueberry Bob",
    option4: "Periwinkle Pete",
    correctAnswer: "Bingo Bronson",
  },
  {
    question:
      "What is the nickname Ilana gives to the secret bathroom in Abbi's workplace?",
    option1: "Wonderland",
    option2: "Narnia",
    option3: "The Magic Throne",
    option4: "The Hidden Oasis",
    correctAnswer: "The Magic Throne",
  },
  {
    question:
      "What is the name of the workout Abbi and Ilana try, which involves twerking as an exercise?",
    option1: "BootyBurn",
    option2: "GluteGroove",
    option3: "RumpRage",
    option4: "TwerkFit",
    correctAnswer: "TwerkFit",
  },
];

// Index to keep track of the current Question
let currentQuestionIndex = 0;

function updateQuestionContent() {
  // Update question tracker by getting the current index out of total array length.
  questionTracker.innerHTML = `Question ${currentQuestionIndex + 1} out of ${
    quizQuestions.length
  }`;
  // Clear existing content in the questionContainer
  //   questionContainer.innerHTML = "";
  let currentQuizQuestion = quizQuestions[currentQuestionIndex];
  // add one to the current index so it's not off by one since it starts at
  individualQuestion.innerHTML = `${currentQuestionIndex + 1}) ${
    currentQuizQuestion.question
  }`;

  answerOption1.innerHTML = `${currentQuizQuestion.option1}`;
  answerOption2.innerHTML = `${currentQuizQuestion.option2}`;
  answerOption3.innerHTML = `${currentQuizQuestion.option3}`;
  answerOption4.innerHTML = `${currentQuizQuestion.option4}`;

  // Loop through each answer
  answers.forEach(function (answer) {
    // Add a click event listener to each answer
    answer.addEventListener("click", function () {
      // remove disabled property from submit
      submitBtn.disabled = false;
      //   clear feedback message. repopulates when submit is clicked
      feedbackMessage.innerHTML = "";
      // Remove 'active' class from all answers
      answers.forEach(function (otherAnswer) {
        otherAnswer.classList.remove("activeAnswer");
      });

      // Add 'active' class to the clicked answer
      answer.classList.add("activeAnswer");

      // Update the selectedAnswer variable
      selectedAnswer = answer.innerHTML;
    });
  });

  // Add event listener for submit button click
  submitBtn.addEventListener("click", function () {
    if (selectedAnswer === currentQuizQuestion.correctAnswer) {
      //   console.log("RIGHT");
      feedbackMessage.innerHTML = "Slay, queen! Nailed it! 💃✨";
      feedbackMessage.style.color = "green";
      nextBtn.disabled = false;
      // Loop through each answer
      answers.forEach(function (answer) {
        if (answer.innerHTML === currentQuizQuestion.correctAnswer) {
          answer.classList.add("correct-answer");
          answer.classList.add("cursor-disabled");
        } else {
          answer.classList.add("cursor-disabled");
        }
      });
      answers.forEach(function (otherAnswer) {
        otherAnswer.classList.remove("activeAnswer");
      });
    } else {
      //   console.log("wrong");
      feedbackMessage.innerHTML =
        "Oh snap! Wrong answer, pal. Shake it off, babe, you got this! 🌈🚀";
      feedbackMessage.style.color = "red";
    }
    //   if current question index matches total array length = last question AND if the selected submitted answer matches the correct answer game over
    if (
      currentQuestionIndex === quizQuestions.length - 1 &&
      selectedAnswer === currentQuizQuestion.correctAnswer
    ) {
      console.log("Game Over");
      setTimeout(() => {
        questionContainer.style.display = "none";
        quizCompleteContainer.style.display = "block";
      }, "2000");
    }
  });
  checkLastQuestion();
}
// Call updateQuestionContent to display the first question
updateQuestionContent();

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    submitBtn.disabled = true;
    feedbackMessage.innerHTML = "";
    currentQuestionIndex++;

    // Loop through each answer to remove styles
    let currentQuizQuestion = quizQuestions[currentQuestionIndex];
    answers.forEach(function (answer) {
      if (answer.innerHTML === currentQuizQuestion.correctAnswer) {
        answer.classList.remove("correct-answer");
      } else {
        nextBtn.disabled = true;
        answers.forEach(function (otherAnswer) {
          answer.classList.remove("cursor-disabled");
          otherAnswer.classList.add("cursor-pointer");
          answer.classList.remove("correct-answer");
        });
      }
    });

    updateQuestionContent();
  }
}

// Add event listener for next button click
nextBtn.addEventListener("click", function () {
  nextQuestion();
});

// Check to see if last question based on index
function checkLastQuestion() {
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "inline-block";
  }
}
// reset
document
  .getElementById("resetPageButton")
  .addEventListener("click", function () {
    // Reload the current page
    window.location.reload();
  });
