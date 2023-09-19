import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import { CLIENTS_PROJECTS } from '@/content-strings';
import { assertListItems, assertNoListItems } from '@/test-helpers';
import IndustrySectorGroupItems from './Items';

const [firstIndustry] = CLIENTS_PROJECTS;

describe('components/IndustrySectorGroup/Group/Items', () => {
  let container;

  const mockProps = {
    items: firstIndustry.items
  };

  beforeEach(() => {
    const rendered = render(<IndustrySectorGroupItems {...mockProps} />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render list items via <Items /> for each item in the industry', () => {
    assertListItems({
      container,
      expectedLength: mockProps.items.length
    });
  });

  describe('when items is not populated', () => {
    const mockPropsNoItems = {
      ...mockProps,
      items: []
    };

    beforeEach(() => {
      const rendered = render(
        <IndustrySectorGroupItems {...mockPropsNoItems} />
      );

      const { container: renderedContainer } = rendered;

      container = renderedContainer;
    });

    it('should NOT render any list items', () => {
      assertNoListItems(container);
    });
  });
});
