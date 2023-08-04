import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkTogether from './WorkTogether';
import { EMAIL } from '@/constants';
import { assertLink } from '@/test-helpers';

describe('components/WorkTogether', () => {
  beforeEach(() => {
    render(
      <WorkTogether />
    );
  });

  it('should render a heading', () => {
    const expectedCopy = 'Maybe we could work together?';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `very friendly` copy', () => {
    const expectedCopy = "I'm very friendly and love to collaborate - let's arrange a coffee/call.";

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `my email is` copy', () => {
    const expectedCopy = 'My email is';

    const element = screen.getByText(expectedCopy, { selector: 'p', exact: false });

    expect(element).toBeInTheDocument();
  });

  it(`should render a link to ${EMAIL}`, () => {
    const element = screen.getByRole('link');

    const expectedHref = `mailto:${EMAIL}`;

    assertLink(
      element,
      expectedHref,
      EMAIL,
      false
    );
  });
});
