import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ROUTES } from '@/constants';
import { mapTechnologiesSummary } from '@/helpers/map-technologies-array';
import { assertLink } from '@/test-helpers';
import TechnicalSkills from './TechnicalSkills';

describe('components/TechnicalSkills', () => {
  beforeEach(() => {
    render(<TechnicalSkills />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'Some of my technical skills';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `no particular order` copy', () => {
    const expectedCopy = 'In no particular order';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render a list of technical skills', () => {
    const technologies = mapTechnologiesSummary();

    technologies.forEach((tech) => {
      const element = screen.getByText(tech.text);

      expect(element).toBeInTheDocument();
    });
  });

  it(`should render a link to ${ROUTES.TECHNICAL_SKILLS}`, () => {
    const element = screen.getByRole('link');

    assertLink({
      element,
      expectedHref: ROUTES.TECHNICAL_SKILLS,
      expectedCopy: 'View all technical skills'
    });
  });
});
