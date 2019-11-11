describe('footer', () => {
  let element;
  beforeEach(() => {
    cy.visit('http://localhost:9000');
    element = 'footer ul li a';
  });

  it('should render a link to twitter', () => {
    cy
      .get(element).first()
      .should('be.visible')
      .should('have.attr', 'href')
      .and('equal', 'http://twitter.com/ttbarnes');
  });

  it('should render a link to linkedin', () => {
    cy
      .get(element).eq(1)
      .should('be.visible')
      .should('have.attr', 'href')
      .and('equal', 'http://uk.linkedin.com/in/ttbarnes');
  });

  it('should render a link to github', () => {
    cy
      .get(element).eq(2)
      .should('be.visible')
      .should('have.attr', 'href')
      .and('equal', 'http://github.com/ttbarnes');
  });

  it('should render a link to stackoverflow', () => {
    cy
      .get(element).last()
      .should('be.visible')
      .should('have.attr', 'href')
      .and('equal', 'http://stackoverflow.com/users/1257504/tony-barnes');
  });

  it('should render company information copy', () => {
    element = 'footer p';

    cy
      .get(element)
      .should('contain', '© Barnes Code Ltd. Company no: 09719405');
  });
});
