import { getElement } from './utility.js'

export function createNavigation() {
  const homeButton = getElement('homeButton')
  const bookmarksButton = getElement('bookmarkButton')
  const createButton = getElement('createCardButton')
  const profileButton = getElement('profileButton')

  const homeSection = getElement('questions')
  const bookmarkSection = getElement('bookmarks')
  const createSection = getElement('createCard')
  const profileSection = getElement('profile')

  const homeIcon = getElement('homeIcon')
  const bookmarkIcon = getElement('bookmarkIcon')
  const createCardIcon = getElement('createCardIcon')
  const profileIcon = getElement('profileIcon')

  const heading = getElement('mainHeading')

  function goToProfile() {
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
  }

  function goToCreate() {
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
  }

  function goToBookmarks() {
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
  }

  function goToHome() {
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
  }
  goToHome()
  goToBookmarks()
  goToCreate()
  goToProfile()
}

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
