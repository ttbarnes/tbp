describe('services list', () => {
  let element;
  beforeEach(() => {
    cy.visit('http://localhost:9000');
  });

  it('should render a heading', () => {
    element = '.services h3';
    cy
      .get(element)
      .should('be.visible')
      .should('contain', 'What I do');
  });

  it('should render the correct amount of services', () => {
    element = '.services ul';
    cy
      .get(element)
      .should('be.visible')
      .children().should('have.length', 6);
  });

  it('should render `Consultation` service', () => {
    element = '.services ul li';
    cy
      .get(element).eq(0)
      .should('be.visible')
      .should('contain', 'Consultation');
  });

  it('should render `Web App Development` service', () => {
    element = '.services ul li';
    cy
      .get(element).eq(1)
      .should('be.visible')
      .should('contain', 'Web App Development');
  });

  it('should render `Websites` service', () => {
    element = '.services ul li';
    cy
      .get(element).eq(2)
      .should('be.visible')
      .should('contain', 'Websites');
  });

  it('should render `User Experience, Design` service', () => {
    element = '.services ul li';
    cy
      .get(element).eq(3)
      .should('be.visible')
      .should('contain', 'User Experience, Design');
  });

  it('should render `Training, mentoring` service', () => {
    element = '.services ul li';
    cy
      .get(element).eq(4)
      .should('be.visible')
      .should('contain', 'Training, mentoring');
  });

  it('should render `Much more...` service', () => {
    element = '.services ul li';
    cy
      .get(element).last()
      .should('be.visible')
      .should('contain', 'Much more...');
  });
});
