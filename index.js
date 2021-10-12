const toggleAnswerButton = document.querySelector(
  ".card__toggle-answer-button"
);
const answer = document.querySelector(".card__answer-text");
const answerHeading = document.querySelector(".card__answer-heading");

toggleAnswerButton.addEventListener("click", () => {
  answerHeading.classList.toggle("hidden");
  answer.classList.toggle("hidden");
});
