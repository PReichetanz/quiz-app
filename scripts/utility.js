export function getElement(dataJS, target = document) {
  return target.querySelector(`[data-js=${dataJS}]`)
}

export function getAllElements(dataJS, target = document) {
  return target.querySelectorAll(`[data-js=${dataJS}]`)
}
