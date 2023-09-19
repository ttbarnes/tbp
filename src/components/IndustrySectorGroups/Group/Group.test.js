import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import { CLIENTS_PROJECTS } from '@/content-strings';
import { assertListItems } from '@/test-helpers';
import Group from './Group';

const [firstIndustry] = CLIENTS_PROJECTS;

describe('components/IndustrySectorGroups/Group', () => {
  let container;

  const mockProps = {
    group: firstIndustry
  };

  beforeEach(() => {
    const rendered = render(<Group {...mockProps} />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a heading', () => {
    const expectedCopy = mockProps.group.heading;

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render list items via <Items /> for each item in the industry', () => {
    // plus 1 list item for the current group list item
    const expectedLength = mockProps.group.items.length + 1;

    assertListItems({
      container,
      expectedLength
    });
  });
});
