//Test Cypress pour afficher un conseil

describe('Test de sélection d’un conseil', () => {
  it('doit ouvrir le conseil sur les saisons au clic', () => {
    cy.visit('https://verify-compost.vercel.app/guide.html');

    // Vérifie que le <details> est fermé par défaut
    cy.get('#SeasonMaintenance').should('not.have.attr', 'open');

    // Clique sur le résumé du <details>
    cy.get('#SeasonMaintenance summary').click();

    // Vérifie qu'il est maintenant ouvert
    cy.get('#SeasonMaintenance').should('have.attr', 'open');

    //vérifier que le contenu devient visible
    cy.get('#SeasonMaintenance p.advices').first().should('be.visible');

  });
});
