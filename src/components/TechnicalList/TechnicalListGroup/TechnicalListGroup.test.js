import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { framerMotion } from '../../../test-mocks';
import TechnicalListGroup from './TechnicalListGroup';

jest.mock('framer-motion', () => framerMotion());

describe('components/TechnicalList/TechnicalListGroup', () => {
  const mockProps = {
    title: 'Group A',
    items: [
      {
        text: 'Skill A',
        className: 'A-class-name'
      },
      {
        text: 'Skill B',
        className: 'B-class-name'
      }
    ]
  };

  beforeEach(() => {
    render(<TechnicalListGroup {...mockProps} />);
  });

  it('should render a heading', () => {
    const element = screen.getByText(mockProps.title, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render unordered list with aria label', () => {
    const expectedCopy = `Tony's ${mockProps.title} technical skills`;

    const element = screen.getByLabelText(expectedCopy, { selector: 'ul' });

    expect(element).toBeInTheDocument();
  });

  it('should render a list item for each tech skills', () => {
    mockProps.items.forEach((tech) => {
      const element = screen.getByText(tech.text, { selector: 'li' });

      expect(element).toBeInTheDocument();
    });
  });
});
