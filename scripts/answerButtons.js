import { getElement } from './utility.js'
import { getAllElements } from './utility.js'

export function answerButtons() {
  const cards = getAllElements('card')
  cards.forEach(card => {
    const button = getElement('toggle-answer', card)
    const answerHeading = getElement('answer-heading', card)
    const answer = getElement('answer', card)

    button.addEventListener('click', () => {
      answerHeading.classList.toggle('hidden')
      answer.classList.toggle('hidden')
    })
  })
}
