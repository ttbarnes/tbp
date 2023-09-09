import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailAddress from './EmailAddress';
import { EMAIL } from '@/constants';
import { assertLink } from '@/test-helpers'

describe('components/EmailAddress', () => {
  beforeEach(() => {
    render(
      <EmailAddress />
    );
  });

  it('should render `my email is` copy', () => {
    const expectedCopy = 'My email address is';

    const element = screen.getByText(expectedCopy);

    expect(element).toBeInTheDocument();
  });

  it('should render an email address link', () => {
    const element = screen.getByRole('link');

    expect(element).toBeInTheDocument();

    assertLink({
      element,
      expectedHref: `mailto:${EMAIL}`,
      expectedCopy: EMAIL
    });
  });
});
