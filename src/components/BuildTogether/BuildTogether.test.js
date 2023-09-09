import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EMAIL } from '@/constants';
import { assertLink } from '@/test-helpers';
import BuildTogether from './BuildTogether';

describe('components/BuildTogether', () => {
  beforeEach(() => {
    render(<BuildTogether />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'Maybe we could build something together?';

    const element = screen.getByText(expectedCopy, { selector: 'h3' });

    expect(element).toBeInTheDocument();
  });

  it('should render `very friendly` copy', () => {
    const expectedCopy = "I'm very friendly and love to collaborate.";

    const element = screen.getByText(expectedCopy, {
      selector: 'p',
      exact: false
    });

    expect(element).toBeInTheDocument();
  });

  it('should render `my email is` copy', () => {
    const expectedCopy = 'My email address is';

    const element = screen.getByText(expectedCopy, {
      selector: 'p',
      exact: false
    });

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
