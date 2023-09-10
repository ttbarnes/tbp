import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuickThought from './QuickThought';

describe('components/QuickThought', () => {
  let container;

  const mockProps = {
    content: {
      HEADING: 'Mock heading',
      ITEMS: ['item 1', 'item 2']
    }
  };

  describe('with valid props', () => {
    beforeEach(() => {
      render(<QuickThought {...mockProps} />);
    });

    it('should render a heading', () => {
      const expectedCopy = mockProps.content.HEADING;

      const element = screen.getByText(expectedCopy, { selector: 'h2' });

      expect(element).toBeInTheDocument();
    });

    it('should render paragraphs', () => {
      const [item1, item2] = mockProps.content.ITEMS;

      const paragraph1 = screen.getByText(item1, { selector: 'p' });
      expect(paragraph1).toBeInTheDocument();

      const paragraph2 = screen.getByText(item2, { selector: 'p' });
      expect(paragraph2).toBeInTheDocument();
    });
  });

  describe('when content.HEADING does not exist', () => {
    const mockPropsNoHeading = {
      ...mockProps,
      content: {
        HEADING: '',
        ITEMS: mockProps.content.ITEMS
      }
    };

    beforeEach(() => {
      const rendered = render(<QuickThought {...mockPropsNoHeading} />);

      const { container: renderedContainer } = rendered;

      container = renderedContainer;
    });

    it('should NOT render a heading', () => {
      const element = container.querySelector('h2');

      expect(element).not.toBeInTheDocument();
    });

    it('should NOT render paragraphs', () => {
      const element = container.querySelector('p');

      expect(element).not.toBeInTheDocument();
    });
  });

  describe('when content.ITEMS is not populated', () => {
    const mockPropsNoItems = {
      ...mockProps,
      content: {
        ITEMS: []
      }
    };

    beforeEach(() => {
      const rendered = render(<QuickThought {...mockPropsNoItems} />);

      const { container: renderedContainer } = rendered;

      container = renderedContainer;
    });

    it('should NOT render a heading', () => {
      const element = container.querySelector('h2');

      expect(element).not.toBeInTheDocument();
    });

    it('should NOT render paragraphs', () => {
      const element = container.querySelector('p');

      expect(element).not.toBeInTheDocument();
    });
  });
});
