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

/* CREATE CARD FORM */
const createCardForm = getElement("createCardForm");
/* PREVENT DEFAULT*/
createCardForm.addEventListener("submit", (event) => event.preventDefault());

// CREATE HTML FOR CARD
const cardContainer = createHTML();
const cardContainerChildren = cardContainer.children;
console.log(cardContainerChildren);

// TAKE INPUT VALUES OF FORM
createCardForm.addEventListener("submit", () => {
  const createCardQuestion = getElement("createCardQuestion");
  const createCardAnswer = getElement("createCardAnswer");

  const questionTextInput = createCardQuestion.value;
  const answerTextInput = createCardAnswer.value;

  // LOOP OVER NODELIST TO REACH HTML ELEMENTS ON NEW CARD
  for (let i = 0; i < cardContainerChildren.length; i++) {
    //
    const questionTextOutput = cardContainerChildren[2];
    const toggleAnswerButton = cardContainerChildren[3];
    const answerHeadingOutput = cardContainerChildren[4];
    const answerTextOutput = cardContainerChildren[5];

    questionTextOutput.textContent = questionTextInput;
    answerTextOutput.textContent = answerTextInput;
    // SHOW ANSWER BUTTON OF NEW CARD
    toggleAnswerButton.addEventListener("click", () => {
      answerHeadingOutput.classList.toggle("hidden");
      answerTextOutput.classList.toggle("hidden");
    });
    // BOOKMARK TOGGLE OF NEW CARD
    const toggleBookmarkOutput = cardContainerChildren[0].childNodes[1];

    toggleBookmarkOutput.addEventListener("click", () => {
      toggleBookmarkOutput.classList.toggle("card__bookmark--active");
    });
  }

  // CREATE TAGS ON NEW CARD
  const createCardTags = getElement("createCardTags");
  const tagsInputArray = createCardTags.value.split(",");
  createTagList(tagsInputArray);

  function createTagList(tagsInputArray) {
    for (let j = 0; j < tagsInputArray.length; j++) {
      const tag = tagsInputArray[j].trim();
      const tagListItem = document.createElement("li");
      tagListItem.textContent = tag;

      const newCardTagList = cardContainerChildren[6];
      newCardTagList.insertAdjacentElement("beforeend", tagListItem);
    }
  }

  createCardForm.insertAdjacentElement("afterend", cardContainer);
  resetForm(createCardQuestion, createCardAnswer, createCardTags);
});

function resetForm(question, answer, tags) {
  question.value = "";
  answer.value = "";
  tags.value = "";
}

function createHTML() {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("data-js", "card");
  card.innerHTML = `<button class="card__bookmark">
          <i
            class="card__bookmark card__bookmark-icon fas fa-bookmark"
            data-js="bookmark"
          ></i>
        </button>
        <h2 class="mx-1rem">Question:</h2>
        <p class="card__question-text mx-1rem" data-js="question">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          quaerat asperiores, eius alias doloribus ut doloremque laudantium
          soluta ipsum enim!
        </p>
        <button class="card__toggle-answer-button" data-js="toggle-answer">
          Show Answer
        </button>
        <h2
          class="card__answer-heading hidden mx-1rem"
          data-js="answer-heading"
        >
          Answer:
        </h2>
        <p class="card__answer-text hidden mx-1rem" data-js="answer">
          The answer is 42.
        </p>
        <ul class="card__tag-list">
        </ul>
        </div>`;

  return card;
}

/* USABILITY FUNCTIONS */

function getElement(dataJS, target = document) {
  return target.querySelector(`[data-js=${dataJS}]`);
}

function getAllElements(dataJS, target = document) {
  return target.querySelectorAll(`[data-js=${dataJS}]`);
}
