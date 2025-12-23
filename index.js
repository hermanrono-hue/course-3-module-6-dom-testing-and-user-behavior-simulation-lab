// index.js

function addElementToDOM(containerId, content) {
  const container = document.getElementById(containerId)
  if (!container) return
  const el = document.createElement('div')
  el.textContent = content
  container.appendChild(el)
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element) element.remove()
}

function simulateClick(containerId, content) {
  const container = document.getElementById(containerId)
  if (!container) return
  const button = document.createElement('button')
  button.textContent = 'Click Me'
  button.addEventListener('click', () => {
    container.textContent = content
  })
  container.appendChild(button)
  button.click() // simulate click
}

function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId)
  const target = document.getElementById(targetId)
  const errorMessage = document.getElementById('error-message')
  if (!form || !target || !errorMessage) return

  const input = form.querySelector('input')
  if (!input.value.trim()) {
    errorMessage.textContent = 'Input cannot be empty'
    errorMessage.classList.remove('hidden')
    return
  }

  target.textContent = input.value
  errorMessage.textContent = ''
  errorMessage.classList.add('hidden')
}

module.exports = { addElementToDOM, removeElementFromDOM, simulateClick, handleFormSubmit }