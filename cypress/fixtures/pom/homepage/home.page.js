class Homepage {
    get buttonAcceptCookies() {return cy.get("#wt-cli-accept-all-btn")}
    get scrollToTheBottom() {return cy.scrollTo("bottom")}
    get buttonAboutUs() {return cy.get('[href="/investors#about-us"]')}
    get buttonMenu() {return cy.get(".grve-hidden-menu-btn")}
    get buttonContact() {return cy.contains("CONTACT")}
}

export default new Homepage()