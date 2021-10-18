import { getAllElements } from './utility.js'

export const bookmarks = getAllElements('bookmark')

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--active')
  })
})
