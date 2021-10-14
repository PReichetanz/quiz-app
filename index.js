/* SHOW ANSWER BUTTONS */
const cards = getAllElements("card");

cards.forEach((card) => {
  const button = getElement("toggle-answer", card);
  const answerHeading = getElement("answer-heading", card);
  const answer = getElement("answer", card);

  button.addEventListener("click", () => {
    answerHeading.classList.toggle("hidden");
    answer.classList.toggle("hidden");
  });
});

/* TOGGLE BOOKMARK */

const bookmarks = getAllElements("bookmark");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--active");
  });
});

/* NAVIGATION */

const homeButton = getElement("homeButton");
const bookmarksButton = getElement("bookmarkButton");
const createButton = getElement("createCardButton");
const profileButton = getElement("profileButton");

const homeSection = getElement("questions");
const bookmarkSection = getElement("bookmarks");
const createSection = getElement("createCard");
const profileSection = getElement("profile");

const homeIcon = getElement("homeIcon");
const bookmarkIcon = getElement("bookmarkIcon");
const createCardIcon = getElement("createCardIcon");
const profileIcon = getElement("profileIcon");

const heading = getElement("mainHeading");

homeButton.addEventListener("click", () => {
  showSection(homeSection);
  hideSection(bookmarkSection);
  hideSection(createSection);
  hideSection(profileSection);

  addHighlighting(homeIcon);
  removeHighlighting(bookmarkIcon);
  removeHighlighting(createCardIcon);
  removeHighlighting(profileIcon);

  heading.textContent = "Quiz-App";
});

bookmarksButton.addEventListener("click", () => {
  hideSection(homeSection);
  showSection(bookmarkSection);
  hideSection(createSection);
  hideSection(profileSection);

  removeHighlighting(homeIcon);
  addHighlighting(bookmarkIcon);
  removeHighlighting(createCardIcon);
  removeHighlighting(profileIcon);

  heading.textContent = "Bookmarks";
});

createButton.addEventListener("click", () => {
  hideSection(homeSection);
  hideSection(bookmarkSection);
  showSection(createSection);
  hideSection(profileSection);

  removeHighlighting(homeIcon);
  removeHighlighting(bookmarkIcon);
  addHighlighting(createCardIcon);
  removeHighlighting(profileIcon);

  heading.textContent = "Create Card";
});

profileButton.addEventListener("click", () => {
  hideSection(homeSection);
  hideSection(bookmarkSection);
  hideSection(createSection);
  showSection(profileSection);

  removeHighlighting(homeIcon);
  removeHighlighting(bookmarkIcon);
  removeHighlighting(createCardIcon);
  addHighlighting(profileIcon);

  heading.textContent = "Profile";
});

function showSection(section) {
  section.classList.remove("hidden");
}

function hideSection(section) {
  section.classList.add("hidden");
}

function addHighlighting(icon) {
  icon.classList.add("navigation-item--active");
}

function removeHighlighting(icon) {
  icon.classList.remove("navigation-item--active");
}

/* USABILITY FUNCTIONS */

function getElement(dataJS, target = document) {
  return target.querySelector(`[data-js=${dataJS}]`);
}

function getAllElements(dataJS, target = document) {
  return target.querySelectorAll(`[data-js=${dataJS}]`);
}
