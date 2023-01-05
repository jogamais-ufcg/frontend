describe('Cadastrar usuário', () => {
  it('Sucessful register', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.get("input[type='email']").type('kilian.melcher@gmail.com');
    cy.get("input[type='text']").type('Kilian Macedo Melcher');
    cy.get("input[type='tel']").type('83986650905');
    cy.get("input[type='password']:first").type('senhasegura123');
    cy.get("input[type='password']:last").type('senhasegura123');
    cy.get("button").contains('Próxima etapa').click();
  });
});

export {};
