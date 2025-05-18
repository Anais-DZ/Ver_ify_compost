describe('Formulaire de contact', () => {
  it('remplit et soumet le formulaire avec le message "test validé"', () => {
    // Visite la page de contact
    cy.visit('https://verify-compost.vercel.app/contact.html');

    // Remplit le champ prénom/nom
    cy.get('#nameFirstname')
      .type('Anaïs Test');

    // Remplit l'email
    cy.get('#mail')
      .type('anais.test@example.com');

    // Remplit le message
    cy.get('#message')
      .type('test validé');

    // Vérifie que le bouton est visible et cliquable
    cy.get('#submitButtonContact').should('be.visible').click();

    // La redirection de formsubmit.co bloque la suite du test
  });
});
