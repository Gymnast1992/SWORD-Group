import Homepage from "../../fixtures/pom/homepage/home.page";
import SideMenu from "../../fixtures/pom/homepage/side.menu.page";
import DigitalServices from "../../fixtures/pom/digital-services/digital.services.page";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to the Digital Services page", () => {
    const text = "Does your digital strategy stack up?";

    Homepage.buttonAcceptCookies.click();
    Homepage.buttonMenu.click();
    SideMenu.buttonExpertise.click({ force: true });
    SideMenu.buttonDigitalServices.click({ force: true });
    DigitalServices.textOnThePage.should(
      "contain.text", text);
  });
});
