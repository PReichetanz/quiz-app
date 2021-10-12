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

/* CHANGE NAVIGATION TAB */

const homeButton = document.querySelector(".js-home-button");
const bookmarksButton = document.querySelector(".js-bookmark-button");
const createButton = document.querySelector(".js-create-button");
const profileButton = document.querySelector(".js-profile-button");

const homeSection = document.querySelector(".js-questions");
const bookmarkSection = document.querySelector(".js-bookmarks");
const createSection = document.querySelector(".js-create");
const profileSection = document.querySelector(".js-profile");

const homeIcon = document.querySelector(".js-home-icon");
const bookmarkIcon = document.querySelector(".js-bookmark-icon");
const createIcon = document.querySelector(".js-create-icon");
const profileIcon = document.querySelector(".js-profile-icon");

const heading = document.querySelector(".js-heading");

homeButton.addEventListener("click", () => {
  homeSection.classList.remove("hidden");
  bookmarkSection.classList.add("hidden");
  createSection.classList.add("hidden");
  profileSection.classList.add("hidden");

  homeIcon.classList.add("nav-item--active");
  bookmarkIcon.classList.remove("nav-item--active");
  createIcon.classList.remove("nav-item--active");
  profileIcon.classList.remove("nav-item--active");

  heading.textContent = "Quiz-App";
});

bookmarksButton.addEventListener("click", () => {
  homeSection.classList.add("hidden");
  bookmarkSection.classList.remove("hidden");
  createSection.classList.add("hidden");
  profileSection.classList.add("hidden");

  homeIcon.classList.remove("nav-item--active");
  bookmarkIcon.classList.add("nav-item--active");
  createIcon.classList.remove("nav-item--active");
  profileIcon.classList.remove("nav-item--active");

  heading.textContent = "Bookmarks";
});

createButton.addEventListener("click", () => {
  homeSection.classList.add("hidden");
  bookmarkSection.classList.add("hidden");
  createSection.classList.remove("hidden");
  profileSection.classList.add("hidden");

  homeIcon.classList.remove("nav-item--active");
  bookmarkIcon.classList.remove("nav-item--active");
  createIcon.classList.add("nav-item--active");
  profileIcon.classList.remove("nav-item--active");

  heading.textContent = "Create Question";
});

profileButton.addEventListener("click", () => {
  homeSection.classList.add("hidden");
  bookmarkSection.classList.add("hidden");
  createSection.classList.add("hidden");
  profileSection.classList.remove("hidden");

  homeIcon.classList.remove("nav-item--active");
  bookmarkIcon.classList.remove("nav-item--active");
  createIcon.classList.remove("nav-item--active");
  profileIcon.classList.add("nav-item--active");

  heading.textContent = "Profile";
});

/* SET NAVIGATION ACTIVE BUTTON */
