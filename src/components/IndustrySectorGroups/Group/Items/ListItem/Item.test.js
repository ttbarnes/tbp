import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import { CLIENTS_PROJECTS } from '@/content-strings';
import IndustrySectorGroupItem from './ListItem';

const [firstIndustry] = CLIENTS_PROJECTS;

describe('components/IndustrySectorGroups/Group/Items/ListItem', () => {
  let container;

  const mockProps = {
    item: firstIndustry.items[0]
  };

  beforeEach(() => {
    const rendered = render(<IndustrySectorGroupItem {...mockProps} />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it("should render a class name from the item's ID", () => {
    const element = container.querySelector('div');

    expect(element).toHaveClass(mockProps.item.id);
  });

  it('should render a heading', () => {
    const expectedCopy = mockProps.item.name;

    const element = screen.getByText(expectedCopy, { selector: 'h3' });

    expect(element).toBeInTheDocument();
  });

  it('should render `summary` copy', () => {
    const expectedCopy = mockProps.item.summary;

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
