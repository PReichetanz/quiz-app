import { getAllElements } from './utility.js'

export function toggleBookmark() {
  const bookmarks = getAllElements('bookmark')
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('card__bookmark--active')
    })
  })
}
