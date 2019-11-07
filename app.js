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
let choiceWhenStakeout = document.querySelector("#choice-when-stakeout")
let lunchButton = document.querySelector("#lunch-button")

lunchBackButton.addEventListener("click", (event) => {
  toggleHidden(lunch, choiceLunchWhere)
})

lunchButton.addEventListener("click", (event) => {
  toggleHidden(lunch, choiceWhenStakeout)
})

let choiceWhenStakeoutBackButton = document.querySelector("#choice-when-stakeout-back-button")
let uneventful = document.querySelector("#uneventful")
let saturdayStakeout = document.querySelector("#saturday-stakeout")
let stakeout = document.querySelector("#stakeout")
let mondayStakeout = document.querySelector("#monday-stakeout")

choiceWhenStakeoutBackButton.addEventListener("click", (event) => {
  toggleHidden(choiceWhenStakeout, lunch)
})

saturdayStakeout.addEventListener("click", (event) => {
  toggleHidden(choiceWhenStakeout, uneventful)
})

mondayStakeout.addEventListener("click", (event) => {
  toggleHidden(choiceWhenStakeout, stakeout)
})

let uneventfulBackButton = document.querySelector("#uneventful-back-button")
let shopping = document.querySelector("#shopping")
let sundayStakeout = document.querySelector("#sunday-stakeout")
let mondayStakeout2 = document.querySelector("#monday-stakeout2")

uneventfulBackButton.addEventListener("click", (event) => {
  toggleHidden(uneventful, choiceWhenStakeout)
})

sundayStakeout.addEventListener("click", (event) => {
  toggleHidden(uneventful, shopping)
})

mondayStakeout2.addEventListener("click", (event) => {
  toggleHidden(uneventful, stakeout)
})

let shoppingBackButton = document.querySelector("#shopping-back-button")
let mondayStakeout3 = document.querySelector("#monday-stakeout3")

shoppingBackButton.addEventListener("click", (event) => {
  toggleHidden(shopping, uneventful)
})

mondayStakeout3.addEventListener("click", (event) => {
  toggleHidden(shopping, stakeout)
})

let stakeoutBackButton = document.querySelector("#stakeout-back-button")
let choiceHotel = document.querySelector("#choice-hotel")
let stakeoutButton = document.querySelector("#stakeout-button")

stakeoutBackButton.addEventListener("click", (event) => {
  toggleHidden(stakeout, choiceWhenStakeout)
})

stakeoutButton.addEventListener("click", (event) => {
  toggleHidden(stakeout, choiceHotel)
})

let choiceHotelBackButton = document.querySelector("#choice-hotel-back-button")
let blomkvistHotel = document.querySelector("#blomkvist-hotel")
let chooseBlomkvist = document.querySelector("#choose-blomkvist")
let salanderHotel = document.querySelector("#salander-hotel")
let chooseSalander = document.querySelector("#choose-salander")

choiceHotelBackButton.addEventListener("click", (event) => {
  toggleHidden(choiceHotel, stakeout)
})

chooseBlomkvist.addEventListener("click", (event) => {
  toggleHidden(choiceHotel, blomkvistHotel)
})

chooseSalander.addEventListener("click", (event) => {
  toggleHidden(choiceHotel, salanderHotel)
})

let blomkvistHotelBackButton = document.querySelector("#blomkvist-hotel-back-button")
let choiceResearch = document.querySelector("#choice-research")
let blomkvistHotelButton = document.querySelector("#blomkvist-hotel-button")
let salanderHotelBackButton = document.querySelector("#salander-hotel-back-button")
let salanderHotelButton = document.querySelector("#salander-hotel-button")

blomkvistHotelBackButton.addEventListener("click", (event) => {
  toggleHidden(blomkvistHotel, choiceHotel)
})

blomkvistHotelButton.addEventListener("click", (event) => {
  toggleHidden(blomkvistHotel, choiceResearch)
})

salanderHotelBackButton.addEventListener("click", (event) => {
  toggleHidden(salanderHotel, choiceHotel)
})

salanderHotelButton.addEventListener("click", (event) => {
  toggleHidden(salanderHotel, choiceResearch)
})

let choiceResearchBackButton = document.querySelector("#choice-research-back-button")
let researchAlias = document.querySelector("#research-alias")
let researchBirgir = document.querySelector("#research-birgir")
let killingTime = document.querySelector("#killing-time")
let meetIdun = document.querySelector("#meet-idun")

choiceResearchBackButton.addEventListener("click", (event) => {
  toggleHidden(choiceResearch, choiceHotel)
})

researchBirgir.addEventListener("click", (event) => {
  toggleHidden(choiceResearch, researchAlias)
})

meetIdun.addEventListener("click", (event) => {
  toggleHidden(choiceResearch, killingTime)
})

let researchAliasBackButton = document.querySelector("#research-alias-back-button")
let idun = document.querySelector("#idun")
let researchAliasButton = document.querySelector("#research-alias-button")
let killingTimeBackButton = document.querySelector("#killing-time-back-button")
let killingTimeButton = document.querySelector("#killing-time-button")

researchAliasBackButton.addEventListener("click", (event) => {
  toggleHidden(researchAlias, choiceResearch)
})

researchAliasButton.addEventListener("click", (event) => {
  toggleHidden(researchAlias, idun)
})

killingTimeBackButton.addEventListener("click", (event) => {
  toggleHidden(killingTime, choiceResearch)
})

killingTimeButton.addEventListener("click", (event) => {
  toggleHidden(killingTime, idun)
})

let idunBackButton = document.querySelector("#idun-back-button")
let chapter3 = document.querySelector("#chapter3")
let naziAgenda = document.querySelector("#nazi-agenda")
let idunButton = document.querySelector("#idun-button")

idunBackButton.addEventListener("click", (event) => {
  toggleHidden(idun, choiceResearch)
})

idunButton.addEventListener("click", (event) => {
  toggleHidden(idun, chapter2, chapter3, naziAgenda)
})

let naziAgendaBackButton = document.querySelector("#nazi-agenda-back-button")
let choiceMeeting = document.querySelector("#choice-meeting")
let naziAgendaButton = document.querySelector("#nazi-agenda-button")

naziAgendaBackButton.addEventListener("click", (event) => {
  toggleHidden(naziAgenda, chapter3, chapter2, idun)
})

naziAgendaButton.addEventListener("click", (event) => {
  toggleHidden(naziAgenda, choiceMeeting)
})

let choiceMeetingBackButton = document.querySelector("#choice-meeting-back-button")
let meetingBlomkvist = document.querySelector("#meeting-blomkvist")
let chooseMeetingBlomkvist = document.querySelector("#choose-meeting-blomkvist")
let meetingSalander = document.querySelector("#meeting-salander")
let chooseMeetingSalander = document.querySelector("#choose-meeting-salander")

choiceMeetingBackButton.addEventListener("click", (event) => {
  toggleHidden(choiceMeeting, naziAgenda)
})

chooseMeetingBlomkvist.addEventListener("click", (event) => {
  toggleHidden(choiceMeeting, meetingBlomkvist)
})

chooseMeetingSalander.addEventListener("click", (event) => {
  toggleHidden(choiceMeeting, meetingSalander)
})

let meetingBlomkvistBackButton = document.querySelector("#meeting-blomkvist-back-button")
let meetingSalanderBackButton = document.querySelector("#meeting-salander-back-button")
let camera = document.querySelector("#camera")
let meetingSalanderButton = document.querySelector("#meeting-salander-button")

meetingBlomkvistBackButton.addEventListener("click", (event) => {
  toggleHidden(meetingBlomkvist, choiceMeeting)
})

meetingSalanderBackButton.addEventListener("click", (event) => {
  toggleHidden(meetingSalander, choiceMeeting)
})

meetingSalanderButton.addEventListener("click", (event) => {
  toggleHidden(meetingSalander, camera)
})

let cameraBackButton = document.querySelector("#camera-back-button")
let choiceEnding = document.querySelector("#choice-ending")
let cameraButton = document.querySelector("#camera-button")

cameraBackButton.addEventListener("click", (event) => {
  toggleHidden(camera, choiceMeeting)
})

cameraButton.addEventListener("click", (event) => {
  toggleHidden(camera, choiceEnding)
})

let choiceEndingBackButton = document.querySelector("#choice-ending-back-button")
let evidencePresident = document.querySelector("#evidence-president")
let president = document.querySelector("#president")
let evidencePolice = document.querySelector("#evidence-police")
let police = document.querySelector("#police")
let evidenceMillenium = document.querySelector("#evidence-millenium")
let millenium = document.querySelector("#millenium")

choiceEndingBackButton.addEventListener("click", (event) => {
  toggleHidden(choiceEnding, camera)
})

president.addEventListener("click", (event) => {
  toggleHidden(choiceEnding, evidencePresident)
})

police.addEventListener("click", (event) => {
  toggleHidden(choiceEnding, evidencePolice)
})

millenium.addEventListener("click", (event) => {
  toggleHidden(choiceEnding, evidenceMillenium)
})

let evidencePresidentBackButton = document.querySelector("#evidence-president-back-button")
let theEnd = document.querySelector("#the-end")
let evidencePresidentButton = document.querySelector("#evidence-president-button")
let evidencePoliceBackButton = document.querySelector("#evidence-police-back-button")
let evidencePoliceButton = document.querySelector("#evidence-police-button")
let evidenceMilleniumBackButton = document.querySelector("#evidence-millenium-back-button")
let evidenceMilleniumButton = document.querySelector("#evidence-millenium-button")

evidencePresidentBackButton.addEventListener("click", (event) => {
  toggleHidden(evidencePresident, choiceEnding)
})

evidencePresidentButton.addEventListener("click", (event) => {
  toggleHidden(evidencePresident, theEnd)
})

evidencePoliceBackButton.addEventListener("click", (event) => {
  toggleHidden(evidencePolice, choiceEnding)
})

evidencePoliceButton.addEventListener("click", (event) => {
  toggleHidden(evidencePolice, theEnd)
})

evidenceMilleniumBackButton.addEventListener("click", (event) => {
  toggleHidden(evidenceMillenium, choiceEnding)
})

evidenceMilleniumButton.addEventListener("click", (event) => {
  toggleHidden(evidenceMillenium, theEnd)
})
