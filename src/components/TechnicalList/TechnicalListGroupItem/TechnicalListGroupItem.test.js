import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { framerMotion } from '../../../test-mocks';
import TechnicalListGroupItem from './TechnicalListGroupItem';

jest.mock('framer-motion', () => framerMotion());

describe('components/TechnicalList/TechnicalListGroupItemItem', () => {
  const mockProps = {
    text: 'Mock text',
    className: 'mock-class-name'
  };

  beforeEach(() => {
    render(<TechnicalListGroupItem {...mockProps} />);
  });

  it('should render a list item with text', () => {
    const element = screen.getByText(mockProps.text, { selector: 'li' });

    expect(element).toBeInTheDocument();
  });
});
