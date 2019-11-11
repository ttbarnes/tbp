describe('clients page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/clients');
  });

  it('should render a heading', () => {
    const element = 'h2';

    cy
      .get(element)
      .should('be.visible')
      .should('contain', 'I\'ve worked with some great people');
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
        .children().should('have.length', 8);
    });

    it('should render an industry group heading', () => {
      cy
        .get(groupsElement).first()
        .children('li').first()
        .find('p').first()
        .should('be.visible')
        .should('contain', 'FinTech');
    });

    it('should render an industry group item', () => {
      cy
        .get(groupsElement).first()
        .children('li').first()
        .find('ul')
        .find('.project-card').should('have.length', 4);
    });

    it('should render industry group items', () => {
      cy
        .get(groupsElement).first()
        .children('li').first()
        .find('ul')
        .find('.project-card').should('have.length', 4);
    });

    it('should render an industry group item heading', () => {
      cy
        .get(groupsElement).first()
        .children('li').first()
        .find('ul')
        .find('.project-card').first()
        .find('h4')
        .should('be.visible')
        .should('contain', 'WorldRemit');
    });

    it('should render an industry group item description', () => {
      cy
        .get(groupsElement).first()
        .children('li').first()
        .find('ul')
        .find('.project-card').first()
        .find('p')
        .should('be.visible')
        .should('contain', 'Replatforming');
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

    it('should have a link to `about` page that takes me to the correct url', () => {
      cy
        .get(element)
        .find('p a').eq(1)
        .should('be.visible')
        .should('contain', 'Read about me')
        .click();

      cy.url().should('include', '/about');
    });

    it('should have a link to `technologies` page that takes me to the correct url', () => {
      cy
        .get(element)
        .find('p a').eq(2)
        .should('be.visible')
        .should('contain', 'See the technologies i\'ve been using')
        .click();

      cy.url().should('include', '/technologies');
    });
  });
});
