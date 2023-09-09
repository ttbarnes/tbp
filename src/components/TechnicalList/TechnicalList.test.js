import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import { framerMotion } from '../../test-mocks';
import TechnicalList from './TechnicalList';

jest.mock('framer-motion', () => framerMotion());

const technologies = mapTechnologyGroups();

describe('components/TechnicalList', () => {
  beforeEach(() => {
    render(<TechnicalList />);
  });

  it('should render a heading with aria label for each group', () => {
    technologies.forEach((group) => {
      const element = screen.getByText(group.TITLE, { selector: 'h3' });

      expect(element).toBeInTheDocument();
    });
  });

  it('should render an unordered list with aria label for each group', () => {
    technologies.forEach((group) => {
      const expectedText = `Tony's ${group.TITLE} technical skills`;

      const element = screen.getByLabelText(expectedText);

      expect(element).toBeInTheDocument();
    });
  });

  it('should render a list item for each skill in tech group', () => {
    const groupSkills = technologies
      .map((group) => group.ITEMS.map((item) => item.text))
      .flat()
      .filter(
        (skill) => skill !== 'Vanilla JavaScript' && skill !== 'TypeScript'
      );

    groupSkills.forEach((skill) => {
      const element = screen.getByText(skill, { selector: 'li' });

      expect(element).toBeInTheDocument();
    });
  });
});
