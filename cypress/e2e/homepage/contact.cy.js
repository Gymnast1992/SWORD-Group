import Homepage from "../../fixtures/pom/homepage/home.page";
import Contact from "../../fixtures/pom/homepage/contact.page";

describe("Contact", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should verify the adress in Lausanne, Switzerland", () => {
    Homepage.buttonAcceptCookies.click();
    Homepage.buttonMenu.click();
    Homepage.buttonContact.click({ force: true });
    Contact.fieldAddress
      .should("contain.text", "Lausanne");
    Contact.fieldAddress
      .should("contain.text", "Avenue des Baumettes 19");
  });
});