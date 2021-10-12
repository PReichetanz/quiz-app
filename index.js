const toggleAnswerButton = document.querySelector(".js-toggle-answer");
const answer = document.querySelector(".js-answer-text");
const answerHeading = document.querySelector(".js-answer-heading");

toggleAnswerButton.addEventListener("click", () => {
  answerHeading.classList.toggle("hidden");
  answer.classList.toggle("hidden");
});
