import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Intro from './Intro';

describe('components/Intro', () => {
  beforeEach(() => {
    render(
      <Intro />
    );
  });

  it('should render `hello` copy', () => {
    const expectedCopy = 'Hello!';

    const element = screen.getByText(expectedCopy, { selector: 'span' });

    expect(element).toBeInTheDocument();
  });

  it('should render a heading', () => {
    const expectedCopy = "I'm Tony";

    const element = screen.getByText(expectedCopy, { selector: 'h1', exact: false });

    expect(element).toBeInTheDocument();
  });
});
