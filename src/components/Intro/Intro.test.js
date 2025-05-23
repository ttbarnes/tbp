import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
// import { NAME } from '@/content-strings';
import Intro from './Intro';

describe('components/Intro', () => {
  beforeEach(() => {
    render(<Intro />);
  });

  it('should render a heading', () => {
    const expectedCopy = "Hello! I'm Tony";

    const element = screen.getByText(expectedCopy, {
      selector: 'h1',
      exact: false
    });

    expect(element).toBeInTheDocument();
  });

  // it('should render an image', () => {
  //   const element = screen.getByRole('img', { src: '/tony-barnes.jpg' });

  //   expect(element).toBeInTheDocument();

  //   const expectedAltText = `Headshot of ${NAME}`;

  //   expect(element).toHaveAttribute('alt', expectedAltText);
  // });
});
