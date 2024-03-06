// Grab all elements
const startInstructionsButton = document.getElementById("start-instructions-button");
const startQuizButton = document.getElementById("start-quiz-button");
const welcomeContainer = document.getElementById("welcome-container");
const instructionsContainer = document.getElementById("instructions-container");
const quizItem = document.getElementById("quiz-item-container");
let individualQuestion = document.getElementById("question");
let answerContainer = document.getElementById("answers-container");
// fire instructions
startInstructionsButton.onclick = function() {
    startInstructionsButton.classList.add("active");
    if(startInstructionsButton.classList.contains("active")){
        welcomeContainer.style.display = "none";
        instructionsContainer.style.display = "block";
    }
}

// fire questions
startQuizButton.onclick = function() {
    startQuizButton.classList.add("active");
    if(startQuizButton.classList.contains("active")){
        instructionsContainer.style.display = "none";
        questionsContainer.style.display = "block";
    }
}

// Questions
const quizItems = [
    {
        quizQuestion: 'How does Ilana describe her perfect man?',
        option1: 'Someone who can cook and is good with kids',
        option2: 'A mix of Barack Obama and Drake',
        option3: 'A billionaire with a yacht and a pet giraffe',
        option4: 'A mime who only communicates in interpretive dance',
        correctAnswer: 'A mix of Barack Obama and Drake'
    },
    {
        quizQuestion: "When Abbi and Ilana go to a fancy restaurant for Abbi's 26th birthday, Ilana has an allergic reaction to what?",
        option1: 'Wine',
        option2: 'Peanuts',
        option3: 'Shellfish',
        option4: 'Soap',
        correctAnswer: 'Shellfish'
    },
    {
        quizQuestion: 'What famous person did Abbi assist Trey in training at Soulstice?',
        option1: 'Shania Twain',
        option2: 'Hilary Clinton',
        option3: 'Oprah',
        option4: 'Tina Fey',
        correctAnswer: 'Shania Twain'
    },
    {
        quizQuestion: 'Abbi gets her wisdom teeth out and hallucinates a blue creature named ____?',
        option1: 'Bingo Bronson',
        option2: 'Teal Tommy',
        option3: 'Blueberry Bob',
        option4: 'Periwinkle Pete',
        correctAnswer: 'Bingo Bronson'
    },
    {
        quizQuestion: "What is the nickname Ilana gives to the secret bathroom in Abbi's workplace?",
        option1: 'Wonderland',
        option2: 'Narnia',
        option3: 'The Magic Throne',
        option4: 'The Hidden Oasis',
        correctAnswer: 'The Magic Throne'
    },
    {
        quizQuestion: 'What is the name of the workout Abbi and Ilana try, which involves twerking as an exercise?',
        option1: 'BootyBurn',
        option2: 'GluteGroove',
        option3: 'RumpRage',
        option4: 'TwerkFit',
        correctAnswer: 'TwerkFit'
    }    
];

  