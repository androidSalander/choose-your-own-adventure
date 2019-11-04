let toggleHidden = function() {
  document.querySelector("#felix").classList.toggle("hidden")
  document.querySelector("#joen").classList.toggle("hidden")
}

let felixButton = document.querySelector("#felix-button");

felixButton.addEventListener("click", toggleHidden)
