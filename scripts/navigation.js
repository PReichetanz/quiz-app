import { getElement } from './utility.js'

export const homeButton = getElement('homeButton')
export const bookmarksButton = getElement('bookmarkButton')
export const createButton = getElement('createCardButton')
export const profileButton = getElement('profileButton')

const homeSection = getElement('questions')
const bookmarkSection = getElement('bookmarks')
const createSection = getElement('createCard')
const profileSection = getElement('profile')

const homeIcon = getElement('homeIcon')
const bookmarkIcon = getElement('bookmarkIcon')
const createCardIcon = getElement('createCardIcon')
const profileIcon = getElement('profileIcon')

const heading = getElement('mainHeading')

homeButton.addEventListener('click', () => {
  showSection(homeSection)
  hideSection(bookmarkSection)
  hideSection(createSection)
  hideSection(profileSection)

  addHighlighting(homeIcon)
  removeHighlighting(bookmarkIcon)
  removeHighlighting(createCardIcon)
  removeHighlighting(profileIcon)

  heading.textContent = 'Quiz-App'
})

bookmarksButton.addEventListener('click', () => {
  hideSection(homeSection)
  showSection(bookmarkSection)
  hideSection(createSection)
  hideSection(profileSection)

  removeHighlighting(homeIcon)
  addHighlighting(bookmarkIcon)
  removeHighlighting(createCardIcon)
  removeHighlighting(profileIcon)

  heading.textContent = 'Bookmarks'
})

createButton.addEventListener('click', () => {
  hideSection(homeSection)
  hideSection(bookmarkSection)
  showSection(createSection)
  hideSection(profileSection)

  removeHighlighting(homeIcon)
  removeHighlighting(bookmarkIcon)
  addHighlighting(createCardIcon)
  removeHighlighting(profileIcon)

  heading.textContent = 'Create Card'
})

profileButton.addEventListener('click', () => {
  hideSection(homeSection)
  hideSection(bookmarkSection)
  hideSection(createSection)
  showSection(profileSection)

  removeHighlighting(homeIcon)
  removeHighlighting(bookmarkIcon)
  removeHighlighting(createCardIcon)
  addHighlighting(profileIcon)

  heading.textContent = 'Profile'
})

function showSection(section) {
  section.classList.remove('hidden')
}

function hideSection(section) {
  section.classList.add('hidden')
}

function addHighlighting(icon) {
  icon.classList.add('navigation-item--active')
}

function removeHighlighting(icon) {
  icon.classList.remove('navigation-item--active')
}
