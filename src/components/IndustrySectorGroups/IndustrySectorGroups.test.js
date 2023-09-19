import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import { CLIENTS_PROJECTS } from '@/content-strings';
import { assertListItems } from '@/test-helpers';
import IndustrySectorGroups from './IndustrySectorGroups';

describe('components/IndustrySectorGroups', () => {
  let container;

  beforeEach(() => {
    const rendered = render(<IndustrySectorGroups />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText(
      'Groups of industries Tony has worked in'
    );

    expect(element).toBeInTheDocument();
  });

  it('should render a list item via <IndustrySectorGroup /> for each industry and their children', () => {
    const industriesLength = CLIENTS_PROJECTS.length;

    const industryItems = CLIENTS_PROJECTS.map(
      (industry) => industry.items
    ).flat();

    const expectedLength = industriesLength + industryItems.length;

    assertListItems({
      container,
      expectedLength
    });
  });
});
