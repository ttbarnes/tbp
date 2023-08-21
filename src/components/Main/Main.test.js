import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main';

describe('components/Main', () => {
  beforeEach(() => {
    render(
      <Main>
        <p>test child elmeent</p>
      </Main>
    );
  });

  it('should render children', () => {
    const expectedCopy = 'test child elmeent';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
