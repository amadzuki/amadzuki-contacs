// FUNCTIONS ----------------------------------------------
const toggleContactForm = () => {
  const blurContainer = document.getElementById("blur")
  blurContainer.classList.toggle("active")
  const popupBox = document.getElementById("popup")
  popupBox.classList.toggle("active")
}

// LISTENERS ---------------------------------------------
const newContactButton = document.getElementById("new-contact-button")
newContactButton.addEventListener("click", toggleContactForm)
const closePopup = document.getElementById("close-popup")
closePopup.addEventListener("click", toggleContactForm)
