function getParameterByName (name, url) {
  if (!url) {
    url = window.location.href
  }

  name = name.replace(/[[]]/g, '\\$&')

  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  var results = regex.exec(url)

  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

let localStorage
if (typeof window === 'undefined' || window === null) {
  localStorage = {
    getItem: () => {},
    setItem: () => {}
  }
} else {
  localStorage = window.localStorage
}

let count = 0

function resetId () {
  count = 0
}

function generateId () {
  return `element-id-${count}`
}

export { getParameterByName, localStorage, resetId, generateId }
