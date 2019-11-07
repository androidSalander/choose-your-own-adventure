
let toggleHidden1 = function() {
  document.querySelector("#felix").classList.toggle("hidden")
  document.querySelector("#joen").classList.toggle("hidden")
}

let felixButton = document.querySelector("#felix-button");

felixButton.addEventListener("click", toggleHidden1)

let toggleHidden2 = function() {
  document.querySelector("#joen").classList.toggle("hidden")
  document.querySelector("#email").classList.toggle("hidden")
}

let joenButton = document.querySelector("#joen-button")

joenButton.addEventListener("click", toggleHidden2)

let toggleHidden3 = function() {
  document.querySelector("#email").classList.toggle("hidden")
  document.querySelector("#field-work").classList.toggle("hidden")
}

let emailButton = document.querySelector("#email-button")

emailButton.addEventListener("click", toggleHidden3)

let toggleHidden4 = function() {
  document.querySelector("#chapter1").classList.toggle("hidden")
  document.querySelector("#field-work").classList.toggle("hidden")
  document.querySelector("#chapter2").classList.toggle("hidden")
  document.querySelector("#blomkvist").classList.toggle("hidden")
}

let fieldWorkButton = document.querySelector("#field-work-button")

fieldWorkButton.addEventListener("click", toggleHidden4)

let toggleHidden5 = function() {
  document.querySelector("#blomkvist").classList.toggle("hidden")
  document.querySelector("#lunch").classList.toggle("hidden")
}

let blomkvistButton = document.querySelector("#blomkvist-button")

blomkvistButton.addEventListener("click", toggleHidden5)

let toggleHidden6 = function() {
  document.querySelector("#lunch").classList.toggle("hidden")
  document.querySelector("#stakeout").classList.toggle("hidden")
}

let lunchButton = document.querySelector("#lunch-button")

lunchButton.addEventListener("click", toggleHidden6)

let toggleHidden7 = function() {
  document.querySelector("#stakeout").classList.toggle("hidden")
  document.querySelector("#insomnia").classList.toggle("hidden")
}

let stakeoutButton = document.querySelector("#stakeout-button")

stakeoutButton.addEventListener("click", toggleHidden7)

let toggleHidden8 = function() {
  document.querySelector("#insomnia").classList.toggle("hidden")
  document.querySelector("#killing-time").classList.toggle("hidden")
}

let insomniaButton = document.querySelector("#insomnia-button")

insomniaButton.addEventListener("click", toggleHidden8)

let toggleHidden9 = function() {
  document.querySelector("#killing-time").classList.toggle("hidden")
  document.querySelector("#idun").classList.toggle("hidden")
}

let killingTimeButton = document.querySelector("#killing-time-button")

killingTimeButton.addEventListener("click", toggleHidden9)

let toggleHidden10 = function() {
  document.querySelector("#chapter2").classList.toggle("hidden")
  document.querySelector("#idun").classList.toggle("hidden")
  document.querySelector("#chapter3").classList.toggle("hidden")
  document.querySelector("#meeting").classList.toggle("hidden")
}

let idunButton = document.querySelector("#idun-button")

idunButton.addEventListener("click", toggleHidden10)

let toggleHidden11 = function() {
  document.querySelector("#meeting").classList.toggle("hidden")
  document.querySelector("#camera").classList.toggle("hidden")
}

let meetingButton = document.querySelector("#meeting-button")

meetingButton.addEventListener("click", toggleHidden11)
