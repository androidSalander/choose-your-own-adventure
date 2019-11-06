let felix = document.querySelector("#felix")
let joen = document.querySelector("#joen")

let toggleHidden1 = function() {
  felix.classList.toggle("hidden")
  joen.classList.toggle("hidden")
}

let felixButton = document.querySelector("#felix-button");

felixButton.addEventListener("click", toggleHidden1)

let email = document.querySelector("#email")

let goBack = function() {
  joen.classList.toggle("hidden")
  felix.classList.toggle("hidden")
}

let joenBackButton = document.querySelector("#joen-back-button")

joenBackButton.addEventListener("click", goBack)

let toggleHidden2 = function() {
  joen.classList.toggle("hidden")
  email.classList.toggle("hidden")
}

let joenButton = document.querySelector("#joen-button")

joenButton.addEventListener("click", toggleHidden2)

let goBack2 = function() {
  email.classList.toggle("hidden")
  joen.classList.toggle("hidden")
}

let emailBackButton = document.querySelector("#email-back-button")

emailBackButton.addEventListener("click", goBack2)

let choiceCuffInstall = document.querySelector("#choice-cuff-install")

let choicePrompt = function() {
  email.classList.toggle("hidden")
  choiceCuffInstall.classList.toggle("hidden")
}

let emailButton = document.querySelector("#email-button")

emailButton.addEventListener("click", choicePrompt)

let goBack3 = function() {
  choiceCuffInstall.classList.toggle("hidden")
  email.classList.toggle("hidden")
}

let choiceCuffInstallBackButton = document.querySelector("#choice-cuff-install-back-button")

choiceCuffInstallBackButton.addEventListener("click", goBack3)

let cableFail = document.querySelector("#cable-fail")

let playerChoose1 = function() {
  choiceCuffInstall.classList.toggle("hidden")
  cableFail.classList.toggle("hidden")
}

let cableRep = document.querySelector("#cable-rep")

cableRep.addEventListener("click", playerChoose1)

let goBack4 = function() {
  cableFail.classList.toggle("hidden")
  choiceCuffInstall.classList.toggle("hidden")
}

let cableFailBackButton = document.querySelector("#cable-fail-back-button")

cableFailBackButton.addEventListener("click", goBack4)

let fieldWork = document.querySelector("#field-work")

let playerChoose2 = function() {
  choiceCuffInstall.classList.toggle("hidden")
  fieldWork.classList.toggle("hidden")
}

let fakeTeen = document.querySelector("#fake-teen")

fakeTeen.addEventListener("click", playerChoose2)

let goBack5 = function() {
  fieldWork.classList.toggle("hidden")
  choiceCuffInstall.classList.toggle("hidden")
}

let fieldWorkBackButton = document.querySelector("#field-work-back-button")

fieldWorkBackButton.addEventListener("click", goBack5)

let chapter1 = document.querySelector("#chapter1")
let chapter2 = document.querySelector("#chapter2")
let blomkvist = document.querySelector("#blomkvist")

let toggleHidden4 = function() {
  chapter1.classList.toggle("hidden")
  fieldWork.classList.toggle("hidden")
  chapter2.classList.toggle("hidden")
  blomkvist.classList.toggle("hidden")
}

let fieldWorkButton = document.querySelector("#field-work-button")

fieldWorkButton.addEventListener("click", toggleHidden4)

let goBack6 = function() {
  blomkvist.classList.toggle("hidden")
  chapter2.classList.toggle("hidden")
  fieldWork.classList.toggle("hidden")
  chapter1.classList.toggle("hidden")
}

let blomkvistBackButton = document.querySelector("#blomkvist-back-button")

blomkvistBackButton.addEventListener("click", goBack6)

let lunchWhere = document.querySelector("#lunch-where")

let choicePrompt2 = function() {
  blomkvist.classList.toggle("hidden")
  lunchWhere.classList.toggle("hidden")
}

let blomkvistButton = document.querySelector("#blomkvist-button")

blomkvistButton.addEventListener("click", choicePrompt2)

let goBack7 = function() {
  lunchWhere.classList.toggle("hidden")
  blomkvist.classList.toggle("hidden")
}

let lunchWhereBackButton = document.querySelector("#lunch-where-back-button")

lunchWhereBackButton.addEventListener("click", goBack7)

let playerChoose3 = function() {
  
}
