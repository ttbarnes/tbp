import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EMAIL, EMAIL_SUBJECT } from '@/constants';
import { assertLink } from '@/test-helpers';
import EmailAddress from './EmailAddress';

describe('components/EmailAddress', () => {
  beforeEach(() => {
    render(<EmailAddress />);
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
      expectedHref: `mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`,
      expectedCopy: EMAIL
    });
  });
});
