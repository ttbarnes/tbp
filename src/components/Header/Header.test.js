import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('components/Header', () => {
  let container;
  beforeEach(() => {
    const rendered = render(<Header />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a header', () => {
    const element = container.querySelector('header');

    expect(element).toBeInTheDocument();
  });
});
