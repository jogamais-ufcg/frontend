describe('Cadastrar aluno', () => {
  it('Sucessful register', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.get("input[type='email']").type('kilian.melcher@gmail.com');
    cy.get("input[type='text']").type('Kilian Macedo Melcher');
    cy.get("input[type='tel']").type('83986650905');
    cy.get("input[type='password']:first").type('senhasegura123');
    cy.get("input[type='password']:last").type('senhasegura123');
    cy.get("input[type='checkbox']").check({force: true});
    cy.get("button").contains('Sou aluno(a)').click();
  });
});

describe('Cadastrar servidor', () => {
  it('Sucessful register', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.get("input[type='email']").type('kilian.melcher@gmail.com');
    cy.get("input[type='text']").type('Kilian Macedo Melcher');
    cy.get("input[type='tel']").type('83986650905');
    cy.get("input[type='password']:first").type('senhasegura123');
    cy.get("input[type='password']:last").type('senhasegura123');
    cy.get("input[type='checkbox']").check({force: true});
    cy.get("button").contains('Sou servidor(a)').click();
  });
});

describe('Cadastrar externo', () => {
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

describe('Falha no cadastro', () => {
  it('Wrong email format', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.get("input[type='email']").type('kilian');
    cy.get("input[type='text']").type('Kilian Macedo Melcher');
    cy.get("input[type='tel']").type('83986650905');
    cy.get("input[type='password']:first").type('senhasegura123');
    cy.get("input[type='password']:last").type('senhasegura123');
    cy.get("button").contains('Próxima etapa').click();
    cy.get("div[class='Toastify']").contains("O email precisa estar em um formato válido");
  });
  it('Short password', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.get("input[type='email']").type('kilian.melcher@gmail.com');
    cy.get("input[type='text']").type('Kilian Macedo Melcher');
    cy.get("input[type='tel']").type('83986650905');
    cy.get("input[type='password']:first").type('123');
    cy.get("input[type='password']:last").type('123');
    cy.get("button").contains('Próxima etapa').click();
    cy.get("div[class='Toastify']").contains("A senha precisa ter no mínimo 8 caracteres");
  });
  it('Missing name', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.wait(1000);
    cy.get("button").contains('Próxima etapa').click();
    cy.get("div[class='Toastify']").contains("Nome é obrigatório");
  });
  it('Missing email', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.get("input[type='text']").type('Kilian Macedo Melcher');
    cy.get("button").contains('Próxima etapa').click();
    cy.get("div[class='Toastify']").contains("Email é obrigatório");
  });
  it('Missing password', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.get("input[type='text']").type('Kilian Macedo Melcher');
    cy.get("input[type='email']").type('kilian.melcher@gmail.com');
    cy.get("button").contains('Próxima etapa').click();
    cy.get("div[class='Toastify']").contains("Senha é obrigatória");
  });
  it('Different passwords', () => {
    cy.visit('/');
    cy.get('a').contains('Cadastre-se').click();
    cy.get("input[type='text']").type('Kilian Macedo Melcher');
    cy.get("input[type='email']").type('kilian.melcher@gmail.com');
    cy.get("input[type='password']:first").type('123456789');
    cy.get("input[type='password']:last").type('987654321');
    cy.get("button").contains('Próxima etapa').click();
    cy.get("div[class='Toastify']").contains("Senhas não conferem");
  });
});

export {};
