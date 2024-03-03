// Grab all elements
const startInstructionsButton = document.getElementById("start-instructions-button");
const startQuizButton = document.getElementById("start-quiz-button");
const welcomeContainer = document.getElementById("welcome-container");
const instructionsContainer = document.getElementById("instructions-container");
const questionsContainer = document.getElementById("questions-container");

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