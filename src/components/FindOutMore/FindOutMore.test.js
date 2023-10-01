import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ROUTES } from '@/constants';
import { assertLink } from '@/test-helpers';
import FindOutMore from './FindOutMore';

describe('components/FindOutMore', () => {
  beforeEach(() => {
    render(<FindOutMore />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'Find out more';

    const element = screen.getByText(expectedCopy, { selector: 'h3' });

    expect(element).toBeInTheDocument();
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText('Links to find out more about Tony');

    expect(element).toBeInTheDocument();
  });

  it('should render 1 list item by default', () => {
    const listItems = screen.getAllByRole('link');

    expect(listItems.length).toEqual(1);
  });

  it(`should render a link to ${ROUTES.ABOUT}`, () => {
    const element = screen.getAllByRole('link')[0];

    expect(element).toBeInTheDocument();

    assertLink({
      element,
      expectedHref: ROUTES.ABOUT,
      expectedCopy: 'About Tony'
    });
  });

  describe('when renderTechSkillsLink prop is provided', () => {
    beforeEach(() => {
      render(<FindOutMore renderTechSkillsLink />);
    });

    it(`should render a link to ${ROUTES.TECHNICAL_SKILLS}`, () => {
      const element = screen.getAllByRole('link')[1];

      expect(element).toBeInTheDocument();

      assertLink({
        element,
        expectedHref: ROUTES.TECHNICAL_SKILLS,
        expectedCopy: "Tony's technical skills"
      });
    });
  });

  describe('when renderThoughtsLink prop is provided', () => {
    beforeEach(() => {
      render(<FindOutMore renderThoughtsLink />);
    });

    it(`should render a link to ${ROUTES.TONYS_THOUGHTS}`, () => {
      const element = screen.getAllByRole('link')[1];

      expect(element).toBeInTheDocument();

      assertLink({
        element,
        expectedHref: ROUTES.TONYS_THOUGHTS,
        expectedCopy: "Tony's thoughts"
      });
    });
  });

  describe('when renderClientsProjectsLink prop is provided', () => {
    beforeEach(() => {
      render(<FindOutMore renderClientsProjectsLink />);
    });

    it(`should render a link to ${ROUTES.CLIENTS_PROJECTS}`, () => {
      const element = screen.getAllByRole('link')[1];

      expect(element).toBeInTheDocument();

      assertLink({
        element,
        expectedHref: ROUTES.CLIENTS_PROJECTS,
        expectedCopy: "Tony's clients, projects"
      });
    });
  });

  describe('when renderRecommendations prop is provided', () => {
    beforeEach(() => {
      render(<FindOutMore renderRecommendations />);
    });

    it(`should render a link to ${ROUTES.RECOMMENDATIONS}`, () => {
      const element = screen.getAllByRole('link')[1];

      expect(element).toBeInTheDocument();

      assertLink({
        element,
        expectedHref: ROUTES.RECOMMENDATIONS,
        expectedCopy: 'Recommendations'
      });
    });
  });
});
