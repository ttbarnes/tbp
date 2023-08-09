import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarListItem from './SidebarListItem';
import { assertLink } from '@/test-helpers';

describe('components/Sidebar/SidebarListItem', () => {
  let container;

  const mockProps = {
    title: 'Mock title'
  };

  beforeEach(() => {
    const rendered = render(
      <SidebarListItem {...mockProps} />
    );

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a list item', () => {
    const listItems = container.getElementsByTagName('li');

    expect(listItems.length).toEqual(1);
  });


  it('should render a link', () => {
    const element = screen.getByRole('link');

    const expectedHref = `#${mockProps.title}`;
    const expectedCopy = mockProps.title;
    
    assertLink(element, expectedHref, expectedCopy);
  });

  it('should render small text', () => {
    const smallElement = screen.getByText(mockProps.title, { selector: 'small' });

    expect(smallElement).toBeInTheDocument();
  });
});
