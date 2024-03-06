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
const quizQuestions = [
    {
        quizQuestion: 'How does Ilana describe her perfect man?',
        options: ['Someone who can cook and is good with kids', 'A mix of Barack Obama and Drake', 'A billionaire with a yacht and a pet giraffe', 'A mime who only communicates in interpretive dance'],
        correctAnswer: 'A mix of Barack Obama and Drake'
    },
    {
        quizQuestion: "When Abbi and Ilana go to a fancy restaurant for Abbi's 26th birthday, Ilana has an allergic reaction to what?",
        options: ['Wine', 'Peanuts', 'Shellfish', 'Soap'],
        correctAnswer: 'Shellfish'
    },
    {
        quizQuestion: 'What famous person did Abbi assist Trey in training at Soulstice?',
        options: ['Shania Twain', 'Hilary Clinton', 'Oprah', 'Tina Fey'],
        correctAnswer: 'Shania Twain'
    },
    {
        quizQuestion: 'Abbi gets her wisdom teeth out and hallucinates a blue creature named ____?',
        options: ['Bingo Bronson', 'Teal Tommy', 'Blueberry Bob', 'Periwinkle Pete'],
        correctAnswer: 'Bingo Bronson'
    },
    {
        quizQuestion: "What is the nickname Ilana gives to the secret bathroom in Abbi's workplace?",
        options: ['Wonderland', 'Narnia', 'The Magic Throne', 'The Hidden Oasis'],
        correctAnswer: 'The Magic Throne'
    },
    {
        quizQuestion: 'What is the name of the workout Abbi and Ilana try, which involves twerking as an exercise?',
        options: ['BootyBurn', 'GluteGroove', 'RumpRage', 'TwerkFit'],
        correctAnswer: 'TwerkFit'
    },
];

  