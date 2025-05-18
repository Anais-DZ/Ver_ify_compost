//Test Cypress : rentrer le nom d'un déchet et cliquer pour avoir le résultat
describe("Test d'affichage de l'overlay après avoir entré un nom de déchet", () => {
  it('doit entrer "fraise" dans la barre de recherche', () => {

    // Accès à la page
    cy.visit('https://verify-compost.vercel.app');

    // Tape "fraise" dans le textarea
    cy.get('#biowaste')
      .should('be.visible')
      .type('fraise', { delay: 400 });

    // Clique sur le bouton de recherche
    cy.get('#checkButton').click();

    // Vérifie que l’overlay est visible
    cy.get('#resultOverlay')
      .should('be.visible');
  });
});