describe('error page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/page-does-not-exist');
  });

  it('should have a link to home page', () => {
    const element = 'h2 + a';

    cy
      .get(element).first()
      .should('be.visible')
      .should('contain', 'Start again')
      .should('have.attr', 'href')
      .and('equal', '/');
  });
});
