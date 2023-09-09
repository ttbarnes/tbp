import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextSection from './TextSection';

describe('components/TextSection', () => {
  let container;

  const mockProps = {
    id: 'mock-id'
  };

  beforeEach(() => {
    const rendered = render(
      <TextSection {...mockProps}>
        <p>test child elmeent</p>
      </TextSection>
    );

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render children', () => {
    const expectedCopy = 'test child elmeent';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render default background and text color classes', () => {
    const element = container.querySelector('div');

    expect(element).toHaveClass('textBlack');
    expect(element).toHaveClass('backgroundWhite');
  });

  it('should render an id from props', () => {
    const element = container.querySelector('div');

    expect(element).toHaveClass('textBlack');
    expect(element).toHaveClass('backgroundWhite');

    expect(element).toHaveAttribute('id', mockProps.id);
  });

  describe('when backgroundColor and textColor props are passed', () => {
    beforeEach(() => {
      const rendered = render(
        <TextSection
          backgroundColor='blue'
          textColor='white'
        />
      );

      const { container: renderedContainer } = rendered;

      container = renderedContainer;
    });

    it('should render different background and text color classes', () => {
      const element = container.querySelector('div');

      expect(element).toHaveClass('textWhite');
      expect(element).toHaveClass('backgroundBlue');
    });
  });
});
