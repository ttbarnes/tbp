import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mapTechnologiesSummary } from '@/helpers/map-technologies-array';
import TechListSummary from './TechListSummary';

describe('components/TechListSummary', () => {
  beforeEach(() => {
    render(<TechListSummary />);
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText("Some of Tony's technical skills");

    expect(element).toBeInTheDocument();
  });

  it('should render a list item for each tech skills', () => {
    const technologies = mapTechnologiesSummary();

    technologies.forEach((tech) => {
      const element = screen.getByText(tech.text, { selector: 'li' });

      expect(element).toBeInTheDocument();
    });
  });
});
