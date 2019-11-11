describe('technologies page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/technologies');
  });

  it('should render a heading', () => {
    const element = 'h2';

    cy
      .get(element)
      .should('be.visible')
      .should('contain', 'I use the best tools for the job');
  });

  describe('groups', () => {
    let groupsElement;

    beforeEach(() => {
      groupsElement = 'ul ';
    });

    it('should render correct amount of groups', () => {
      cy
        .get(groupsElement).first()
        .should('be.visible')
        .children().should('have.length', 11);
    });

    it('should render a technology group heading', () => {
      cy
        .get(groupsElement).first()
        .children('li').first()
        .find('p').first()
        .should('be.visible')
        .should('contain', 'UI');
    });

    it('should render technology group items', () => {
      cy
        .get(groupsElement).first()
        .children('li').first()
        .find('ul')
        .find('.tech-tag').should('have.length', 3);
    });

    it('should render a technology group item\'s copy', () => {
      cy
        .get(groupsElement).first()
        .children('li').first()
        .find('ul')
        .find('.tech-tag').first().get('div').should('contain', 'React');
    });
  });

  describe('page CTA', () => {
    let element;
    beforeEach(() => {
      element = '.page-cta';
    });

    it('should be rendered', () => {
      cy
        .get(element)
        .should('be.visible');
    });

    it('should have a link to email', () => {
      cy
        .get(element)
        .find('p a').first()
        .should('be.visible')
        .should('contain', 'tony@tonybarnes.me');
    });
  });
});
