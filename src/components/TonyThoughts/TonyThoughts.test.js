import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ROUTES } from '@/constants';
import { assertLink } from '@/test-helpers';
import TonyThoughts from './TonyThoughts';

describe('components/TonyThoughts', () => {
  beforeEach(() => {
    render(<TonyThoughts />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'Tony thoughts';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `knowledge sharing` copy', () => {
    const expectedCopy =
      'I love to share knowledge, experiences, teach and mentor - It is invaluable and helps everyone.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `will be publishing` copy', () => {
    const expectedCopy =
      'I will be publishing a blog soon - In the meantime, here are some ';

    const element = screen.getByText(expectedCopy, {
      selector: 'p',
      exact: false
    });

    expect(element).toBeInTheDocument();
  });

  it(`should render a link to ${ROUTES.TONYS_THOUGHTS}`, () => {
    const element = screen.getByRole('link');

    assertLink({
      element,
      expectedHref: ROUTES.TONYS_THOUGHTS,
      expectedCopy: 'quick thoughts'
    });
  });
});
