const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const answerImage = document.querySelector(".question");
const questionImage = document.querySelector(".answer");
const okayBaby = document.querySelector(".okay");
const willYou = document.querySelector(".will");
const clickMe = document.querySelector(".click");

const yesPressed = () => {};
const phrases = [
  "No",
  "Herh!",
  "Are you sure?",
  "You bitch!",
  "Really sure?",
  "Think again!",
  "My friend",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Fuck you!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
];

yesButton.addEventListener("click", function () {
  answerImage.style.display = "block";
  okayBaby.style.display = "block";
  questionImage.style.display = "none";
  willYou.style.display = "none";

  noButton.disabled = true;
});

let currentIndex = 0; // To keep track of the current index in the phrases array

noButton.textContent = phrases[currentIndex]; // Set the initial text

noButton.addEventListener("click", function () {
  // Increment the index for the next click
  currentIndex++;

  // If we reached the end of the phrases array, reset the index to 0 and show the last phrase
  if (currentIndex === phrases.length) {
    currentIndex = 0;
    noButton.textContent = phrases[phrases.length - 1];
  } else {
    // Set the button text to the current phrase
    noButton.textContent = phrases[currentIndex];
  }
});
