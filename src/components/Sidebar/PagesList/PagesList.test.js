import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ROUTES } from '@/constants';
import { assertLink } from '@/test-helpers';
import PagesList from './PagesList';

describe('components/Sidebar/PagesList', () => {
  let container;

  const mockProps = {
    onClick: jest.fn()
  };

  beforeEach(() => {
    const rendered = render(<PagesList {...mockProps} />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText('Pages');

    expect(element).toBeInTheDocument();
  });

  it('should render a list item via <SidebarListItem /> for each page', () => {
    const listItems = container.getElementsByTagName('li');

    const expectedLength = 5;

    expect(listItems.length).toEqual(expectedLength);
  });

  it('should render `About` text and link via <SidebarListItem />', () => {
    const links = container.querySelectorAll('li a');

    const link = links[0];

    assertLink({
      element: link,
      expectedHref: ROUTES.ABOUT,
      expectedCopy: 'About'
    });
  });

  it('should render `Technical skills` text and link via <SidebarListItem />', () => {
    const links = container.querySelectorAll('li a');

    const link = links[1];

    assertLink({
      element: link,
      expectedHref: ROUTES.TECHNICAL_SKILLS,
      expectedCopy: 'Technical skills'
    });
  });

  it("should render `Tony's thoughts` text and link via <SidebarListItem />", () => {
    const links = container.querySelectorAll('li a');

    const link = links[2];

    assertLink({
      element: link,
      expectedHref: ROUTES.TONYS_THOUGHTS,
      expectedCopy: "Tony's thoughts"
    });
  });

  // it('should render `Clients, projects` text and link via <SidebarListItem />', () => {
  //   const links = container.querySelectorAll('li a');

  //   const link = links[3];

  //   assertLink({
  //     element: link,
  //     expectedHref: ROUTES.CLIENTS_PROJECTS,
  //     expectedCopy: 'Clients, projects'
  //   });
  // });

  // it('should render `Recommendations` text and link via <SidebarListItem />', () => {
  //   const links = container.querySelectorAll('li a');

  //   const link = links[4];

  //   assertLink({
  //     element: link,
  //     expectedHref: ROUTES.RECOMMENDATIONS,
  //     expectedCopy: 'Recommendations'
  //   });
  // });
});
