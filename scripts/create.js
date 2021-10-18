import { getElement } from './utility.js'

export function createCard() {
  /* CREATE CARD FORM */
  const createCardForm = getElement('createCardForm')
  /* PREVENT DEFAULT*/
  createCardForm.addEventListener('submit', event => event.preventDefault())

  // CREATE HTML FOR CARD
  const cardContainer = createHTML()
  const cardContainerChildren = cardContainer.children

  // TAKE INPUT VALUES OF FORM
  createCardForm.addEventListener('submit', () => {
    const createCardQuestion = getElement('createCardQuestion')
    const createCardAnswer = getElement('createCardAnswer')

    const questionTextInput = createCardQuestion.value
    const answerTextInput = createCardAnswer.value

    // LOOP OVER NODELIST TO REACH HTML ELEMENTS ON NEW CARD
    for (let i = 0; i < cardContainerChildren.length; i++) {
      //
      const questionTextOutput = cardContainerChildren[2]
      const toggleAnswerButton = cardContainerChildren[3]
      const answerHeadingOutput = cardContainerChildren[4]
      const answerTextOutput = cardContainerChildren[5]

      questionTextOutput.textContent = questionTextInput
      answerTextOutput.textContent = answerTextInput
      // SHOW ANSWER BUTTON OF NEW CARD
      toggleAnswerButton.addEventListener('click', () => {
        answerHeadingOutput.classList.toggle('hidden')
        answerTextOutput.classList.toggle('hidden')
      })
      // BOOKMARK TOGGLE OF NEW CARD
      const toggleBookmarkOutput = cardContainerChildren[0].childNodes[1]

      toggleBookmarkOutput.addEventListener('click', () => {
        toggleBookmarkOutput.classList.toggle('card__bookmark--active')
      })
    }

    // CREATE TAGS ON NEW CARD
    const createCardTags = getElement('createCardTags')
    const tagsInputArray = createCardTags.value.split(',')
    createTagList(tagsInputArray)

    function createTagList(tagsInputArray) {
      for (let j = 0; j < tagsInputArray.length; j++) {
        const tag = tagsInputArray[j].trim()
        const tagListItem = document.createElement('li')
        tagListItem.textContent = tag

        const newCardTagList = cardContainerChildren[6]
        newCardTagList.insertAdjacentElement('beforeend', tagListItem)
      }
    }

    createCardForm.insertAdjacentElement('afterend', cardContainer)
    resetForm(createCardQuestion, createCardAnswer, createCardTags)
  })
}

function resetForm(question, answer, tags) {
  question.value = ''
  answer.value = ''
  tags.value = ''
}

function createHTML() {
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  card.setAttribute('data-js', 'card')
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
        </div>`

  return card
}
