import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechListSummary from './TechListSummary';
import mapTechnologiesArray from '@/helpers/map-technologies-array';

describe('components/TechListSummary', () => {
  beforeEach(() => {
    render(
      <TechListSummary />
    );
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText("Some of Tony's technical skills");

    expect(element).toBeInTheDocument();
  });

  it('should render a list item for each tech skills', () => {
    const technologies = mapTechnologiesArray();

    technologies.map((tech) => {
      const element = screen.getByText(tech.text, { selector: 'li' });

      expect(element).toBeInTheDocument();
    });
  });
});
