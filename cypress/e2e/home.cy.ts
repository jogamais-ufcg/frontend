describe('home page', () => {
  it('exists main title', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Agende com tranquilidade o seu horário');
    
  });
});