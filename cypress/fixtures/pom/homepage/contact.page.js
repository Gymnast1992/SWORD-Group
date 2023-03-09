class Contact {
  get fieldAddress() {
    return cy.get(".grve-row-inner .grve-column-1-5").eq(2);
  }
}

export default new Contact();
