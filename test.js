let felix = document.querySelector("#felix")
let joen = document.querySelector("#joen")

class Navigator {
  constructor(id) {
    this.id = id
  }
  toggleHidden() {
    this.id.classList.toggle("hidden")
  }
}
new Navigator(felix)

let felixButton = document.querySelector("#felix-button");

felixButton.addEventListener("click", felix.toggleHidden)
