import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import { NAME, RECOMMENDATIONS } from '@/content-strings';
import { assertListItems, assertNoListItems } from '@/test-helpers';
import RecommendationsList from './RecommendationsList';

describe('components/RecommendationsList', () => {
  let container;

  const mockProps = {
    recommendations: RECOMMENDATIONS
  };

  beforeEach(() => {
    const rendered = render(<RecommendationsList {...mockProps} />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText(`Endorsements for ${NAME}`);

    expect(element).toBeInTheDocument();
  });

  it('should render a list item via <ListItem /> for each recommendation', () => {
    assertListItems({
      container,
      expectedLength: RECOMMENDATIONS.length
    });
  });

  describe('when items is not populated', () => {
    const mockPropsNoItems = {
      ...mockProps,
      recommendations: []
    };

    beforeEach(() => {
      const rendered = render(<RecommendationsList {...mockPropsNoItems} />);

      const { container: renderedContainer } = rendered;

      container = renderedContainer;
    });

    it('should NOT render any list items', () => {
      assertNoListItems(container);
    });
  });
});
