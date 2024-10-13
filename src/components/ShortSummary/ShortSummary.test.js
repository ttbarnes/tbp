import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BARNES_CODE } from '@/constants';
import { assertLink } from '@/test-helpers';
import ShortSummary from './ShortSummary';

describe('components/ShortSummary', () => {
  beforeEach(() => {
    render(<ShortSummary />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'About me';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  describe('`as a...` copy', () => {
    it('should render', () => {
      const firstCopy =
        'As a Lead Full Stack JavaScript Developer and director of ';

      let element = screen.getByText(firstCopy, {
        selector: 'p',
        exact: false
      });

      expect(element).toBeInTheDocument();

      const lastCopy =
        'I specialise in bespoke web app development - particularly around re-platforming and digital transformation projects.';

      element = screen.getByText(lastCopy, { selector: 'p', exact: false });

      expect(element).toBeInTheDocument();
    });

    it(`should render a link to ${BARNES_CODE}`, () => {
      const element = screen.getByRole('link');

      const expectedHref = BARNES_CODE.HREF;
      const expectedCopy = BARNES_CODE.TEXT;

      assertLink({
        element,
        expectedHref,
        expectedCopy,
        assertTargetBlank: true
      });
    });
  });

  it('should render `have architected` copy', () => {
    const expectedCopy =
      'I have architected, built and maintained a lot of APIs, UIs and databases for many different types of industries and products or services.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `when not writing code` copy', () => {
    const expectedCopy =
      "When I'm not writing code, you'll probably find me analysing something and figuring out how to tackle and transform opportunities into clean and scalable solutions.";

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
