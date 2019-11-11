describe('about page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/about');
  });

  it('should render a heading', () => {
    const element = 'h2';

    cy
      .get(element)
      .should('be.visible')
      .should('contain', 'A creative engineer with a passion');
  });

  it('should render copy', () => {
    const element = 'h2 + div';

    cy
      .get(element)
      .should('be.visible')
      .children().should('have.length', 5);
  });

  it('should render a list of services', () => {
    const element = '.services';

    cy
      .get(element)
      .should('be.visible');
  });
});
