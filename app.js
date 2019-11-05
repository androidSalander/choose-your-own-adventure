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
