let felix = document.querySelector("#felix")
let joen = document.querySelector("#joen")

let toggleHidden = function(id1, id2, id3, id4) {
  id1.classList.toggle("hidden")
  id2.classList.toggle("hidden")
  id3.classList.toggle("hidden")
  id4.classList.toggle("hidden")
};


let felixButton = document.querySelector("#felix-button");

felixButton.addEventListener("click", (event) => {
  toggleHidden(felix, joen);
})

let joenBackButton = document.querySelector("#joen-back-button")
let email = document.querySelector("#email")
let joenButton = document.querySelector("#joen-button")

joenBackButton.addEventListener("click", (event) => {
  toggleHidden(joen, felix)
})

joenButton.addEventListener("click", (event) => {
  toggleHidden(joen, email)
})

let emailBackButton = document.querySelector("#email-back-button")
let choiceCuffInstall = document.querySelector("#choice-cuff-install")
let emailButton = document.querySelector("#email-button")

emailBackButton.addEventListener("click", (event) => {
  toggleHidden(email, joen)
})

emailButton.addEventListener("click", (event) => {
  toggleHidden(email, choiceCuffInstall)
})

let choiceCuffInstallBackButton = document.querySelector("#choice-cuff-install-back-button")
let cableFail = document.querySelector("#cable-fail")
let cableRep = document.querySelector("#cable-rep")

choiceCuffInstallBackButton.addEventListener("click", (event) => {
  toggleHidden(choiceCuffInstall, email)
})

cableRep.addEventListener("click", (event) => {
  toggleHidden(choiceCuffInstall, cableFail)
})

let cableFailBackButton = document.querySelector("#cable-fail-back-button")

cableFailBackButton.addEventListener("click", (event) => {
  toggleHidden(cableFail, choiceCuffInstall)
})

let fieldWork = document.querySelector("#field-work")
let fakeTeen = document.querySelector("#fake-teen")

fakeTeen.addEventListener("click", (event) => {
  toggleHidden(choiceCuffInstall, fieldWork)
})

let fieldWorkBackButton = document.querySelector("#field-work-back-button")
let chapter1 = document.querySelector("#chapter1")
let chapter2 = document.querySelector("#chapter2")
let blomkvist = document.querySelector("#blomkvist")
let fieldWorkButton = document.querySelector("#field-work-button")

fieldWorkBackButton.addEventListener("click", (event) => {
  toggleHidden(fieldWork, choiceCuffInstall)
})

fieldWorkButton.addEventListener("click", (event) => {
  toggleHidden(chapter1, fieldWork, chapter2, blomkvist)
})

let blomkvistBackButton = document.querySelector("#blomkvist-back-button")
let choiceLunchWhere = document.querySelector("#choice-lunch-where")
let blomkvistButton = document.querySelector("#blomkvist-button")

blomkvistBackButton.addEventListener("click", (event) => {
  toggleHidden(blomkvist, chapter2, fieldWork, chapter1)
})

blomkvistButton.addEventListener("click", (event) => {
  toggleHidden(blomkvist, choiceLunchWhere)
})

let choiceLunchWhereBackButton = document.querySelector("#choice-lunch-where-back-button")
let hitAndRun = document.querySelector("#hit-and-run")
let newSpot = document.querySelector("#new-spot")

choiceLunchWhereBackButton.addEventListener("click", (event) => {
  toggleHidden(choiceLunchWhere, blomkvist)
})

newSpot.addEventListener("click", (event) => {
  toggleHidden(choiceLunchWhere, hitAndRun)
})

let hitAndRunBackButton = document.querySelector("#hit-and-run-back-button")

hitAndRunBackButton.addEventListener("click", (event) => {
  toggleHidden(hitAndRun, choiceLunchWhere)
})

let lunch = document.querySelector("#lunch")
let pickledHerring = document.querySelector("#pickled-herring")

pickledHerring.addEventListener("click", (event) => {
  toggleHidden(choiceLunchWhere, lunch)
})

let lunchBackButton = document.querySelector("#lunch-back-button")


lunchBackButton.addEventListener("click", (event) => {
  toggleHidden(lunch, choiceLunchWhere)
})
