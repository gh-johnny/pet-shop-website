const hamburger = document.querySelector(".hamburger")

window.addEventListener("click", e => {
  const dialogDimensions = hamburger.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
      hamburger.removeAttribute('open')
  }
})
