import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import HomePage from '../pages';

describe('pages/index', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it('should render `intro` section', () => {
    const expectedCopy = 'Tony.';

    const element = screen.getByText(expectedCopy, {
      selector: 'h1',
      exact: false
    });

    expect(element).toBeInTheDocument();
  });

  it('should render `short summary` section', () => {
    const expectedCopy = 'A little about me';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `experience` section', () => {
    const expectedCopy = 'Over 14 years of experience';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `technical skills` section', () => {
    const expectedCopy = 'Some of my technical skills';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `soft skills` section', () => {
    const expectedCopy = 'Some of my soft skills';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `Tony thoughts` section', () => {
    const expectedCopy = 'Tony thoughts';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `work together` section', () => {
    const expectedCopy = 'Maybe we could work together?';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `find me on` section', () => {
    const expectedCopy = 'You can also find me on';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });
});
