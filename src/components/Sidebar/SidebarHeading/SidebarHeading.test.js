import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NAME } from '@/content-strings';
import SidebarHeading from './SidebarHeading';

describe('components/Sidebar/SidebarHeading', () => {
  let container;

  beforeEach(() => {
    const rendered = render(<SidebarHeading />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a heading with link', () => {
    const heading = container.querySelector('h2 a');

    expect(heading.text).toEqual(NAME);
  });
});
