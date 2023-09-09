import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NAME } from '@/content-strings';
import Sidebar from './Sidebar';

describe('components/Sidebar', () => {
  let container;

  beforeEach(() => {
    const rendered = render(
      <Sidebar>
        <p>test child elmeent</p>
      </Sidebar>
    );

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a heading with link', () => {
    const heading = container.querySelector('h2 a');

    expect(heading.text).toEqual(NAME);
  });

  it('should render children', () => {
    const expectedCopy = 'test child elmeent';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
