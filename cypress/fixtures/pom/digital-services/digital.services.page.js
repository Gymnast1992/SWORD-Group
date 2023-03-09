class DigitalServices {
    get textOnThePage() {return cy.get('[style="text-align: left;"] b')}
}

export default new DigitalServices()