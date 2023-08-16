import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';
import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import { NAME } from '@/content-strings';
import { assertLink } from '@/test-helpers';

const groups = mapTechnologyGroups();

describe('components/Sidebar', () => {
  let container;

  beforeEach(() => {
    const rendered = render(
      <Sidebar />
    );

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a heading with link', () => {
    const heading = container.querySelector('h2 a');

    expect(heading.text).toEqual(NAME);
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText("Categories of Tony's technical skills");

    expect(element).toBeInTheDocument();
  });

  it('should render a list item via <SidebarListItem /> for each tech skill group/category', () => {
    const listItems = container.getElementsByTagName('li');

    expect(listItems.length).toEqual(groups.length);
  });

  it('should render text and a link via <SidebarListItem /> for each tech skill group/category', () => {
    const links = container.querySelectorAll('li a');

    links.forEach((link, index) => {
      const group = groups[index];

      const expectedHref = `#${group.TITLE}`;

      assertLink({
        element: link,
        expectedHref,
        expectedCopy: group.TITLE
      });
    });
  });
});
