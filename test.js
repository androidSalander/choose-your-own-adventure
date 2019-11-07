let felix = document.querySelector("#felix")
let joen = document.querySelector("#joen")

let toggleHidden = function(id1, id2) {
  id1.classList.toggle("hidden")
  id2.classList.toggle("hidden")
};


let felixButton = document.querySelector("#felix-button");

felixButton.addEventListener("click", (event) => {
  toggleHidden(felix, joen);
})
