import Homepage from "../../fixtures/pom/homepage/home.page";
import AboutUs from "../../fixtures/pom/homepage/about.us.page"

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to Homepage", () => {
    Homepage.buttonAcceptCookies.click();
    cy.contains("A global leader in technology transformation").should(
      "be.visible"
    );
  });

  it("Should navigate to the About Us section", () => {
    Homepage.buttonAcceptCookies.click();
    Homepage.scrollToTheBottom;
    Homepage.buttonAboutUs.click();
    AboutUs.h2.should("contain.text", "Chairman’s Message");
  });


  it("Should navigate to the CEO in Switzerland in the About Us section", () => {
    Homepage.buttonAcceptCookies.click();
    Homepage.scrollToTheBottom;
    Homepage.buttonAboutUs.click();
    AboutUs.sectionCEOSwiss.should(
      "contain.text",
      "Jacques Mottard"
    );
    AboutUs.sectionCEOSwiss.should(
      "contain.text",
      "CEO Switzerland (aa)"
    );
  });
});
