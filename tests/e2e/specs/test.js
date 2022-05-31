import { mockedFilmsEndpoint, mockedStarShipsEndpoint } from "../mock/api";

describe("PMG Starwar Test", () => {
  it("Visits the app root url", () => {
    mockedFilmsEndpoint();
    cy.visit("/films");
    cy.location("pathname").should("eq", "/films");
  });

  it("Visits the app starships url", () => {
    mockedStarShipsEndpoint();
    cy.visit("/star-ships");
    cy.location("pathname").should("eq", "/star-ships");
  });

  it("Render Films", () => {
    cy.visit("/films");
    cy.location("pathname").should("eq", "/films");
    cy.contains("h3", "A New Hope");
    cy.contains("div", "George Lucas");
    cy.contains("h3", "A New Hope").click();
    cy.location("pathname").should("eq", "/films/1");
  });

  it("Render StarShips", () => {
    cy.visit("/star-ships");
    cy.location("pathname").should("eq", "/star-ships");
    cy.contains("h3", "CR90 corvette");
    cy.contains("div", "corvette");
    cy.contains("h3", "CR90 corvette").click();
    cy.location("pathname").should("eq", "/star-ships/1");
  });
});
