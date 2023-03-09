class SideMenu {
    get buttonExpertise() {return cy.contains("EXPERTISE")}
    get buttonDigitalServices() {return cy.contains("Digital Services")}
}

export default new SideMenu()