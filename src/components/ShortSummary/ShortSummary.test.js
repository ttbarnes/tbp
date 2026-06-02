import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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
      const firstCopy = `As a Lead Engineer, I specialise in bespoke web apps, APIs, migrations, integrations and AI adoption, with extensive experience in re-platforming and digital transformation projects.`;

      const element = screen.getByText(firstCopy, {
        selector: 'p',
        exact: true
      });

      expect(element).toBeInTheDocument();
    });
  });

  it('should render `have architected` copy', () => {
    const expectedCopy =
      'I have architected, built, iterated and maintained many services and integrations for a vast range of industries, products and services.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `as a strategist` copy', () => {
    const expectedCopy =
      'As a strategist, I analyse problems and opportunities - understanding, defining and proposing solutions that are clean and scalable - ultimately to help people, teams and processes to provide a scalable strategy for future iterations.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
