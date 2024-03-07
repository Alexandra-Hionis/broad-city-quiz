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

// Iterate through the array and generate HTML content for each object
quizQuestions.forEach((quizQuestion, index) => {
  const htmlContent = `

    <div
    class="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl border-2 border-black flex"
  >
    <!-- Question -->
    <div class="p-8 relative z-40 md:min-w-96">
      <h1
        id="question"
        class="block mt-1 text-3xl leading-tight font-medium text-black"
      >
      Question ${index + 1}: ${quizQuestion.question}
      </h1>

      <!-- Answers -->

      <div id="answers-container">
        <!-- answers go here -->
      <p
          class="mt-2 cursor-pointer text-slate-500 border border-violet-500 capitalize rounded-lg p-2 hover:bg-gray-100 hover:text-black flex justify-between"
        >
        ${quizQuestion.option1}
        </p> 
        <p
        class="mt-2 cursor-pointer text-slate-500 border border-violet-500 capitalize rounded-lg p-2 hover:bg-gray-100 hover:text-black flex justify-between"
      >
        ${quizQuestion.option2}
      </p> 
      <p
      class="mt-2 cursor-pointer text-slate-500 border border-violet-500 capitalize rounded-lg p-2 hover:bg-gray-100 hover:text-black flex justify-between"
    >
        ${quizQuestion.option3}
    </p> 
    <p
    class="mt-2 cursor-pointer text-slate-500 border border-violet-500 capitalize rounded-lg p-2 hover:bg-gray-100 hover:text-black flex justify-between"
  >
        ${quizQuestion.option4}
  </p> 
        <span id="right-wrong-icon"> <!--❌--></span>
      </div>

      <button
        class="border-2 border-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg text-sm shadow-sm py-2 px-3 text-violet-500 hover:text-white mt-2 transition duration-0 hover:duration-300 capitalize"
        id="submitQuestion"
      >
        Submit
      </button>
      <button
        disabled
        class="border-2 border-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg text-sm shadow-sm py-2 px-3 text-violet-500 hover:text-white mt-2 transition duration-0 hover:duration-300 capitalize disabled:opacity-75"
        id="nextQuestion"
      >
        Next
      </button>

      <!-- <div class="p-2 m-5"> -->
      <!--Question # out of length-->
      <!-- </div> -->
    </div>
  </div>
  `;

  // Append the HTML content to the container
  questionContainer.innerHTML += htmlContent;
});
