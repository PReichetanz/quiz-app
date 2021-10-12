/* TOGGLE ANSWER ON QUESTION CARD */

const toggleAnswerButton = document.querySelector(".js-toggle-answer");
const answer = document.querySelector(".js-answer-text");
const answerHeading = document.querySelector(".js-answer-heading");

toggleAnswerButton.addEventListener("click", () => {
  answerHeading.classList.toggle("hidden");
  answer.classList.toggle("hidden");
});

/* TOGGLE BOOKMARK */

const bookmark = document.querySelector(".js-bookmark");

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("card__bookmark--active");
});
