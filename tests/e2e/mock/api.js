export const mockedFilmsEndpoint = () => {
  cy.intercept(
    {
      method: "GET",
      url: "https://swapi.dev/api/films",
    },
    { fixture: "../fixtures/films.json" }
  );
};

export const mockedStarShipsEndpoint = () => {
  cy.intercept(
    {
      method: "GET",
      url: "https://swapi.dev/api/starships",
    },
    { fixture: "../fixtures/starships.json" }
  );
};
