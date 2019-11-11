describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000');
  });

  describe('intro', () => {
    it('should render heading copy', () => {
      const element = '.intro-heading span span';

      cy
        .get(element).eq(0)
        .should('be.visible')
        .should('contain', 'Hello!')
        .get(element).eq(1)
        .should('be.visible')
        .should('contain', 'I\'m Tony.');
    });

    it('should render a description', () => {
      const element = '.intro-heading h2';

      const expected = 'Freelance, Front End/Full Stack JavaScript Developer specialising in bespoke web app development.';

      cy
        .get(element).eq(0)
        .should('be.visible')
        .should('contain', expected);
    });

    describe('links', () => {
      it('should render a link to `about` page that takes me to the correct url', () => {
        const element = '.intro-heading ul li';

        cy
          .get(element).first().children('a')
          .should('be.visible')
          .should('contain', 'Learn more')
          .click();
        cy.url()
          .should('include', '/about');
      });

      it('should render a link to `clients` page that takes me to the correct url', () => {
        const element = '.intro-heading ul li';

        cy
          .get(element).last().children('a')
          .should('be.visible')
          .should('contain', 'who i\'ve worked with')
          .click();
        cy.url()
          .should('include', '/clients');
      });
    });
  });

  it('should render a list of services', () => {
    const element = '.services';
    cy
      .get(element)
      .should('be.visible');
  });
});
