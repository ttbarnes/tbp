import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import RecommendationsPage from '../../z-ages/recommendations';

describe.skip('pages/recommendations', () => {
  let container;

  beforeEach(() => {
    const rendered = render(<RecommendationsPage />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a header', () => {
    const element = container.querySelector('header');

    expect(element).toBeInTheDocument();
  });

  it('should render a heading', () => {
    const expectedCopy = 'Recommendations';

    const element = screen.getByText(expectedCopy, { selector: 'h1' });

    expect(element).toBeInTheDocument();
  });

  it('should render a sidebar component', () => {
    const expectedCopy = 'Pages';

    const element = screen.getByLabelText(expectedCopy, { selector: 'ul' });

    expect(element).toBeInTheDocument();
  });

  // TODO - test for recommendations appearing
});
