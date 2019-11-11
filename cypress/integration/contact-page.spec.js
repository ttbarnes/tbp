describe('contact page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/contact');
  });

  it('should have a link to email', () => {
    const element = 'p a';

    cy
      .get(element).first()
      .should('be.visible')
      .should('contain', 'tony@tonybarnes.me');
  });

  it('should have a link to twitter', () => {
    const element = 'p a';

    cy
      .get(element).last()
      .should('be.visible')
      .should('have.attr', 'href')
      .and('equal', 'http://twitter.com/ttbarnes');
  });
});
