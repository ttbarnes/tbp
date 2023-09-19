import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import ListItem from './ListItem';

describe('components/RecommendationsList/ListItem', () => {
  const mockProps = {
    author: 'Mock author',
    authorText: 'This is a recommendation',
    role: 'CEO'
  };

  const { author, authorText, role } = mockProps;

  beforeEach(() => {
    render(<ListItem {...mockProps} />);
  });

  it('should render `author` and `role` aria label', () => {
    const element = screen.getByLabelText(
      `Recommendation by ${author}. ${author}'s role is "${role}"`
    );

    expect(element).toBeInTheDocument();
  });

  it('should render `author` and `role` copy', () => {
    const expectedCopy = `${author} - ${role}`;

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `authorText` copy', () => {
    const element = screen.getByText(authorText, { selector: 'span' });

    expect(element).toBeInTheDocument();
  });

  it('should render `open quote` symbol', () => {
    const element = screen.getByText('“', { selector: 'span' });

    expect(element).toBeInTheDocument();
  });

  it('should render `close quote` symbol', () => {
    const element = screen.getByText('”', { selector: 'span' });

    expect(element).toBeInTheDocument();
  });
});
